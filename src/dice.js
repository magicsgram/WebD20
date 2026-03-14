import * as THREE from 'three';

// One distinct base color per die slot (up to 12)
const PALETTE = [
  '#c0392b', '#2980b9', '#27ae60', '#e67e22',
  '#8e44ad', '#16a085', '#d35400', '#2c3e50',
  '#e91e63', '#00897b', '#5e35b1', '#f9a825',
];

// Polygon face counts per die type
const FACE_COUNT    = { 4: 4, 6: 6, 8: 8, 12: 12, 20: 20 };
// How many triangles make up ONE polygon face
const TRIS_PER_FACE = { 4: 1, 6: 2, 8: 1, 12: 3, 20: 1 };
// Visual / physics scale
const SCALE         = { 4: 0.72, 6: 0.68, 8: 0.74, 12: 0.70, 20: 0.74 };

// ── Canvas face texture ──────────────────────────────────────────────────────
function makeNumberTexture(number, bgHex) {
  const S = 256;
  const canvas = document.createElement('canvas');
  canvas.width = S; canvas.height = S;
  const ctx = canvas.getContext('2d');

  // Rounded filled bg
  const pad = 12;
  ctx.fillStyle = bgHex;
  ctx.beginPath();
  ctx.roundRect(pad, pad, S - pad * 2, S - pad * 2, 32);
  ctx.fill();

  // Subtle inner highlight
  const grad = ctx.createRadialGradient(S / 2, S * 0.35, 10, S / 2, S / 2, S * 0.65);
  grad.addColorStop(0, 'rgba(255,255,255,0.18)');
  grad.addColorStop(1, 'rgba(0,0,0,0.18)');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.roundRect(pad, pad, S - pad * 2, S - pad * 2, 32);
  ctx.fill();

  // Border
  ctx.strokeStyle = 'rgba(255,255,255,0.30)';
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.roundRect(pad, pad, S - pad * 2, S - pad * 2, 32);
  ctx.stroke();

  // Number
  const fontSize = number >= 10 ? 116 : 140;
  ctx.font = `bold ${fontSize}px Arial, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'rgba(0,0,0,0.45)';
  ctx.fillText(String(number), S / 2 + 3, S / 2 + 5);
  ctx.fillStyle = '#ffffff';
  ctx.fillText(String(number), S / 2, S / 2);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// ── Add groups to a non-indexed geometry (one group per polygon face) ────────
function addFaceGroups(geometry, numFaces, trisPerFace) {
  const vpf = trisPerFace * 3;
  for (let f = 0; f < numFaces; f++) {
    geometry.addGroup(f * vpf, vpf, f);
  }
}

// ── Compute outward face normals used for value detection ────────────────────
function computeFaceNormals(geometry, numFaces, trisPerFace) {
  const pos = geometry.attributes.position;
  const vpf = trisPerFace * 3;
  const normals = [];

  for (let f = 0; f < numFaces; f++) {
    const n = new THREE.Vector3();
    for (let t = 0; t < trisPerFace; t++) {
      const base = f * vpf + t * 3;
      const a = new THREE.Vector3().fromBufferAttribute(pos, base);
      const b = new THREE.Vector3().fromBufferAttribute(pos, base + 1);
      const c = new THREE.Vector3().fromBufferAttribute(pos, base + 2);
      n.add(
        new THREE.Vector3()
          .crossVectors(b.clone().sub(a), c.clone().sub(a))
          .normalize()
      );
    }
    normals.push(n.normalize());
  }
  return normals;
}

// ── Public: create a die object ──────────────────────────────────────────────
/**
 * Returns { mesh, faceNormals, physPositions, sides, physRadius }
 */
export function createDie(sides, colorIndex) {
  const numFaces    = FACE_COUNT[sides];
  const trisPerFace = TRIS_PER_FACE[sides];
  const scale       = SCALE[sides];
  const hexColor    = PALETTE[colorIndex % PALETTE.length];

  // Build Three.js geometry
  let baseGeo;
  if      (sides === 4)  baseGeo = new THREE.TetrahedronGeometry(scale);
  else if (sides === 6)  baseGeo = new THREE.BoxGeometry(scale * 1.72, scale * 1.72, scale * 1.72);
  else if (sides === 8)  baseGeo = new THREE.OctahedronGeometry(scale * 1.08);
  else if (sides === 12) baseGeo = new THREE.DodecahedronGeometry(scale * 1.06);
  else                   baseGeo = new THREE.IcosahedronGeometry(scale * 1.08, 0);

  // Keep indexed positions for physics hull generation (unique vertices).
  const physHullPositions = new Float32Array(baseGeo.attributes.position.array);

  // Flat, non-indexed for uniform face-normal extraction
  const geo = baseGeo.toNonIndexed();
  baseGeo.dispose();

  // BoxGeometry carries its 6 groups through toNonIndexed(); others need manual groups
  if (geo.groups.length === 0) {
    addFaceGroups(geo, numFaces, trisPerFace);
  }
  geo.computeVertexNormals();

  // Physics vertex cloud (Float32Array) — Rapier computes convex hull from these
  const physPositions = new Float32Array(geo.attributes.position.array);

  // Face normals in local space (value detection after settling)
  const faceNormals = computeFaceNormals(geo, numFaces, trisPerFace);

  // Per-face materials with numbered canvas textures
  const materials = Array.from({ length: numFaces }, (_, i) =>
    new THREE.MeshStandardMaterial({
      map: makeNumberTexture(i + 1, hexColor),
      roughness: 0.28,
      metalness: 0.06,
      flatShading: true,
    })
  );

  const mesh = new THREE.Mesh(geo, materials);
  mesh.castShadow    = true;
  mesh.receiveShadow = true;

  return { mesh, faceNormals, physPositions, physHullPositions, sides, physRadius: scale };
}

// ── Public: read value from settled die ─────────────────────────────────────
/**
 * Find which face is pointing most upward → that face's index + 1 is the roll value.
 * For d4 the "value" is conventionally the bottom face, but we read top for simplicity.
 */
export function detectValue(faceNormals, rapierRot) {
  const q  = new THREE.Quaternion(rapierRot.x, rapierRot.y, rapierRot.z, rapierRot.w);
  const up = new THREE.Vector3(0, 1, 0);

  let best = -Infinity, bestIdx = 0;
  faceNormals.forEach((n, i) => {
    const dot = n.clone().applyQuaternion(q).dot(up);
    if (dot > best) { best = dot; bestIdx = i; }
  });
  return bestIdx + 1;
}
