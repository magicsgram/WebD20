import * as THREE from 'three';

// One distinct base color per die slot (up to 12)
const PALETTE = [
  '#a6cee3', '#1f78b4', '#b2df8a', '#33a02c',
  '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00',
  '#cab2d6', '#6a3d9a', '#ffff99', '#b15928',
];

// Polygon face counts per die type
const FACE_COUNT    = { 4: 4, 6: 6, 8: 8, 12: 12, 20: 20 };
// How many triangles make up ONE polygon face
const TRIS_PER_FACE = { 4: 1, 6: 2, 8: 1, 12: 3, 20: 1 };
// Visual / physics scale
const SCALE         = { 4: 0.72, 6: 0.68, 8: 0.89, 12: 0.70, 20: 0.765 };

function makeVibrantShades(hex) {
  const base = new THREE.Color(hex);
  const hsl = { h: 0, s: 0, l: 0 };
  base.getHSL(hsl);

  const hi = new THREE.Color().setHSL(hsl.h, Math.min(1, hsl.s * 1.30), Math.min(0.68, hsl.l + 0.14));
  const mid = new THREE.Color().setHSL(hsl.h, Math.min(1, hsl.s * 1.36), Math.min(0.58, hsl.l + 0.06));
  const lo = new THREE.Color().setHSL(hsl.h, Math.min(1, hsl.s * 1.20), Math.max(0.24, hsl.l - 0.16));

  return {
    hi: `#${hi.getHexString()}`,
    mid: `#${mid.getHexString()}`,
    lo: `#${lo.getHexString()}`,
  };
}

const D20_UV_TOP = { x: 0.5, y: 0.30 };
const D20_UV_LEFT = { x: 0.70, y: 0.74 };
const D20_UV_RIGHT = { x: 0.30, y: 0.74 };
const D20_UV_CENTER = {
  x: (D20_UV_TOP.x + D20_UV_LEFT.x + D20_UV_RIGHT.x) / 3,
  y: (D20_UV_TOP.y + D20_UV_LEFT.y + D20_UV_RIGHT.y) / 3,
};
const D20_TEXT_UV = { x: 0.5, y: 0.41 };
const D8_UV_TOP = { x: 0.5, y: 0.94 };
const D8_UV_LEFT = { x: 0.15, y: 0.26 };
const D8_UV_RIGHT = { x: 0.85, y: 0.26 };
const D8_UV_CENTER = {
  x: (D8_UV_TOP.x + D8_UV_LEFT.x + D8_UV_RIGHT.x) / 3,
  y: (D8_UV_TOP.y + D8_UV_LEFT.y + D8_UV_RIGHT.y) / 3,
};
const D8_TEXT_UV = { x: D8_UV_CENTER.x, y: D8_UV_CENTER.y };

const TOON_GRADIENT = (() => {
  const data = new Uint8Array([48, 128, 204, 255]);
  const tex = new THREE.DataTexture(data, 4, 1, THREE.RedFormat);
  tex.needsUpdate = true;
  tex.minFilter = THREE.NearestFilter;
  tex.magFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  return tex;
})();

const DIE_GEOMETRY_CACHE = new Map();
const FACE_TEXTURE_CACHE = new Map();
const WORLD_UP = new THREE.Vector3(0, 1, 0);
const WORLD_RIGHT = new THREE.Vector3(1, 0, 0);
const TEMP_ROTATION_QUAT = new THREE.Quaternion();
const TEMP_ROTATED_NORMAL = new THREE.Vector3();
const OPPOSITE_SUM_DICE = new Set([6, 8, 12, 20]);
const oppositeFaceValueBySides = new Map();

function buildOppositeFaceValueMap(faceNormals) {
  const faceCount = faceNormals.length;
  const candidates = [];

  for (let i = 0; i < faceCount; i++) {
    for (let j = i + 1; j < faceCount; j++) {
      candidates.push({ i, j, dot: faceNormals[i].dot(faceNormals[j]) });
    }
  }

  candidates.sort((a, b) => {
    if (a.dot !== b.dot) return a.dot - b.dot;
    if (a.i !== b.i) return a.i - b.i;
    return a.j - b.j;
  });

  const paired = new Array(faceCount).fill(false);
  const pairs = [];

  for (const candidate of candidates) {
    if (paired[candidate.i] || paired[candidate.j]) continue;
    paired[candidate.i] = true;
    paired[candidate.j] = true;
    pairs.push({ a: candidate.i, b: candidate.j });
  }

  pairs.sort((left, right) => {
    const lMin = Math.min(left.a, left.b);
    const rMin = Math.min(right.a, right.b);
    if (lMin !== rMin) return lMin - rMin;
    const lMax = Math.max(left.a, left.b);
    const rMax = Math.max(right.a, right.b);
    return lMax - rMax;
  });

  const valueByIndex = new Array(faceCount).fill(1);
  let low = 1;
  for (const pair of pairs) {
    valueByIndex[pair.a] = low;
    valueByIndex[pair.b] = (faceCount + 1) - low;
    low++;
  }

  return valueByIndex;
}

function getOppositeFaceValueByIndex(sides) {
  let valueByIndex = oppositeFaceValueBySides.get(sides);
  if (!valueByIndex) {
    valueByIndex = buildOppositeFaceValueMap(getOrCreateDieGeometryData(sides).faceNormals);
    oppositeFaceValueBySides.set(sides, valueByIndex);
  }
  return valueByIndex;
}

export function getFaceValueForIndex(sides, faceIndex) {
  if (OPPOSITE_SUM_DICE.has(sides)) {
    return getOppositeFaceValueByIndex(sides)[faceIndex] ?? 1;
  }
  return faceIndex + 1;
}

function drawCenteredNumber(ctx, text, centerX, centerY) {
  const metrics = ctx.measureText(text);
  const left = metrics.actualBoundingBoxLeft ?? (metrics.width * 0.5);
  const right = metrics.actualBoundingBoxRight ?? (metrics.width * 0.5);
  const ascent = metrics.actualBoundingBoxAscent ?? 0;
  const descent = metrics.actualBoundingBoxDescent ?? 0;

  // Convert requested visual center into the correct baseline origin.
  const drawX = centerX + ((left - right) * 0.5);
  const drawY = centerY + ((ascent - descent) * 0.5);
  ctx.fillText(text, drawX, drawY);

  return { drawX, drawY, left, right, ascent, descent };
}

// ── Canvas face texture ──────────────────────────────────────────────────────
function makeNumberTexture(number, bgHex, sides) {
  const S = 256;
  const canvas = document.createElement('canvas');
  canvas.width = S; canvas.height = S;
  const ctx = canvas.getContext('2d');
  const shades = makeVibrantShades(bgHex);

  // Flat face color (no painted highlights/shadows)
  ctx.fillStyle = shades.mid;
  ctx.fillRect(0, 0, S, S);

  // Number
  const fontSize = sides === 20
    ? (number >= 10 ? 46 : 56)
    : (sides === 8
      ? (number >= 10 ? 66 : 86)
      : (sides === 12
        ? (number >= 10 ? 118 : 161)
        : (sides === 6
          ? (number >= 10 ? 104 : 161)
          : (number >= 10 ? 90 : 140))));
  ctx.font = `bold ${fontSize}px Arial, sans-serif`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
  const textX = sides === 20
    ? S * D20_TEXT_UV.x
    : (sides === 8 ? S * D8_TEXT_UV.x : S / 2);
  const textY = sides === 20
    ? S * D20_TEXT_UV.y
    : (sides === 8 ? S * D8_TEXT_UV.y : S / 2);
  ctx.fillStyle = '#0a0a0a';
  const text = String(number);
  const glyph = drawCenteredNumber(ctx, text, textX, textY);

  if (sides >= 9 && (number === 6 || number === 9)) {
    const baseDotRadius = sides === 20 ? 6 : 10;
    const dotRadius = baseDotRadius * 0.9;
    const dotPadX = sides === 20 ? 1 : 2;
    const dotPadY = sides === 20 ? 1 : 2;
    const rightEdge = glyph.drawX + glyph.right;
    const bottomEdge = glyph.drawY + glyph.descent;
    const dotX = Math.min(S - dotRadius - 6, rightEdge + dotPadX);
    const dotY = Math.min(S - dotRadius - 6, bottomEdge + dotPadY);
    ctx.fillStyle = '#0a0a0a';
    ctx.beginPath();
    ctx.arc(dotX, dotY, dotRadius, 0, Math.PI * 2);
    ctx.fill();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.generateMipmaps = sides !== 20;
  tex.minFilter = sides === 20 ? THREE.LinearFilter : THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.anisotropy = 1;
  return tex;
}

function getCachedFaceTexture(number, bgHex, sides) {
  const key = `${sides}|${bgHex}|${number}`;
  let tex = FACE_TEXTURE_CACHE.get(key);
  if (!tex) {
    tex = makeNumberTexture(number, bgHex, sides);
    FACE_TEXTURE_CACHE.set(key, tex);
  }
  return tex;
}

// ── Add groups to a non-indexed geometry (one group per polygon face) ────────
function addFaceGroups(geometry, numFaces, trisPerFace) {
  const vpf = trisPerFace * 3;
  for (let f = 0; f < numFaces; f++) {
    geometry.addGroup(f * vpf, vpf, f);
  }
}

function applyTriFaceUVs(geometry, numFaces, trisPerFace, uvTop, uvLeft, uvRight) {
  if (trisPerFace !== 1 || !geometry.attributes.uv) return;

  const uv = geometry.attributes.uv;
  for (let f = 0; f < numFaces; f++) {
    const base = f * 3;
    uv.setXY(base, uvTop.x, uvTop.y);
    uv.setXY(base + 1, uvLeft.x, uvLeft.y);
    uv.setXY(base + 2, uvRight.x, uvRight.y);
  }
  uv.needsUpdate = true;
}

function applyPlanarFaceUVs(geometry, numFaces, trisPerFace) {
  if (!geometry.attributes.uv || trisPerFace < 1) return;

  const pos = geometry.attributes.position;
  const uv = geometry.attributes.uv;
  const vpf = trisPerFace * 3;

  const a = new THREE.Vector3();
  const b = new THREE.Vector3();
  const c = new THREE.Vector3();
  const faceNormal = new THREE.Vector3();
  const tangent = new THREE.Vector3();
  const bitangent = new THREE.Vector3();
  const p = new THREE.Vector3();

  for (let f = 0; f < numFaces; f++) {
    const faceBase = f * vpf;

    a.fromBufferAttribute(pos, faceBase);
    b.fromBufferAttribute(pos, faceBase + 1);
    c.fromBufferAttribute(pos, faceBase + 2);

    faceNormal
      .crossVectors(b.clone().sub(a), c.clone().sub(a))
      .normalize();

    const ref = Math.abs(faceNormal.dot(WORLD_UP)) > 0.92 ? WORLD_RIGHT : WORLD_UP;
    tangent.crossVectors(ref, faceNormal).normalize();
    bitangent.crossVectors(faceNormal, tangent).normalize();

    let minU = Infinity;
    let maxU = -Infinity;
    let minV = Infinity;
    let maxV = -Infinity;

    for (let i = 0; i < vpf; i++) {
      p.fromBufferAttribute(pos, faceBase + i);
      const u = p.dot(tangent);
      const v = p.dot(bitangent);
      if (u < minU) minU = u;
      if (u > maxU) maxU = u;
      if (v < minV) minV = v;
      if (v > maxV) maxV = v;
    }

    const rangeU = Math.max(1e-6, maxU - minU);
    const rangeV = Math.max(1e-6, maxV - minV);

    for (let i = 0; i < vpf; i++) {
      p.fromBufferAttribute(pos, faceBase + i);
      const u = p.dot(tangent);
      const v = p.dot(bitangent);
      const normalizedU = (u - minU) / rangeU;
      const normalizedV = (v - minV) / rangeV;
      uv.setXY(faceBase + i, normalizedU, normalizedV);
    }
  }

  uv.needsUpdate = true;
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

function getOrCreateDieGeometryData(sides) {
  const cached = DIE_GEOMETRY_CACHE.get(sides);
  if (cached) return cached;

  const numFaces = FACE_COUNT[sides];
  const trisPerFace = TRIS_PER_FACE[sides];
  const scale = SCALE[sides];

  let baseGeo;
  if      (sides === 4)  baseGeo = new THREE.TetrahedronGeometry(scale);
  else if (sides === 6)  baseGeo = new THREE.BoxGeometry(scale * 1.72, scale * 1.72, scale * 1.72);
  else if (sides === 8)  baseGeo = new THREE.OctahedronGeometry(scale * 1.08);
  else if (sides === 12) baseGeo = new THREE.DodecahedronGeometry(scale * 1.06);
  else                   baseGeo = new THREE.IcosahedronGeometry(scale * 1.08, 0);

  const physHullPositions = new Float32Array(baseGeo.attributes.position.array);

  const geometry = baseGeo.index ? baseGeo.toNonIndexed() : baseGeo.clone();
  baseGeo.dispose();

  if (geometry.groups.length === 0) {
    addFaceGroups(geometry, numFaces, trisPerFace);
  }

  if (sides === 12) {
    applyPlanarFaceUVs(geometry, numFaces, trisPerFace);
  }

  if (sides === 8) {
    applyTriFaceUVs(geometry, numFaces, trisPerFace, D8_UV_TOP, D8_UV_LEFT, D8_UV_RIGHT);
  }

  if (sides === 20) {
    applyTriFaceUVs(geometry, numFaces, trisPerFace, D20_UV_TOP, D20_UV_LEFT, D20_UV_RIGHT);
  }

  geometry.computeVertexNormals();

  const edgesGeometry = new THREE.EdgesGeometry(geometry);
  const faceNormals = computeFaceNormals(geometry, numFaces, trisPerFace);

  const data = {
    geometry,
    edgesGeometry,
    faceNormals,
    physPositions: new Float32Array(geometry.attributes.position.array),
    physHullPositions,
    physRadius: scale,
    numFaces,
  };

  DIE_GEOMETRY_CACHE.set(sides, data);
  return data;
}

// ── Public: create a die object ──────────────────────────────────────────────
/**
 * Returns { mesh, faceNormals, physPositions, sides, physRadius }
 */
export function createDie(sides, colorIndex, colorHexOverride) {
  const hexColor    = colorHexOverride ?? PALETTE[colorIndex % PALETTE.length];
  const dieGeometryData = getOrCreateDieGeometryData(sides);
  const { numFaces } = dieGeometryData;

  // Per-face materials with numbered canvas textures
  const materials = Array.from({ length: numFaces }, (_, i) =>
    new THREE.MeshToonMaterial({
      map: getCachedFaceTexture(getFaceValueForIndex(sides, i), hexColor, sides),
      color: 0xffffff,
      gradientMap: TOON_GRADIENT,
      emissive: new THREE.Color(hexColor),
      emissiveIntensity: 0.08,
    })
  );

  const mesh = new THREE.Mesh(dieGeometryData.geometry, materials);
  mesh.castShadow    = true;
  mesh.receiveShadow = true;

  const outlines = new THREE.LineSegments(
    dieGeometryData.edgesGeometry,
    new THREE.LineBasicMaterial({
      color: 0x050505,
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
    })
  );
  outlines.renderOrder = 2;
  mesh.add(outlines);

  return {
    mesh,
    faceNormals: dieGeometryData.faceNormals,
    physPositions: dieGeometryData.physPositions,
    physHullPositions: dieGeometryData.physHullPositions,
    sides,
    physRadius: dieGeometryData.physRadius,
  };
}

export function disposeDieMesh(mesh) {
  const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
  mats.forEach((m) => m.dispose());

  mesh.children.forEach((child) => {
    if (child.material) {
      const childMats = Array.isArray(child.material) ? child.material : [child.material];
      childMats.forEach((m) => m.dispose());
    }
  });
}

// ── Public: read value from settled die ─────────────────────────────────────
/**
 * Find which face is pointing most upward → that face's index + 1 is the roll value.
 * For d4 the "value" is conventionally the bottom face, but we read top for simplicity.
 */
export function detectValue(faceNormals, rapierRot) {
  return getFaceValueForIndex(faceNormals.length, detectTopFaceIndex(faceNormals, rapierRot));
}

export function detectTopFace(faceNormals, rapierRot) {
  TEMP_ROTATION_QUAT.set(rapierRot.x, rapierRot.y, rapierRot.z, rapierRot.w);

  let bestDot = -Infinity;
  let bestIdx = 0;
  for (let i = 0; i < faceNormals.length; i++) {
    const dot = TEMP_ROTATED_NORMAL
      .copy(faceNormals[i])
      .applyQuaternion(TEMP_ROTATION_QUAT)
      .dot(WORLD_UP);
    if (dot > bestDot) {
      bestDot = dot;
      bestIdx = i;
    }
  }

  return { index: bestIdx, alignment: bestDot };
}

export function detectTopFaceIndex(faceNormals, rapierRot) {
  return detectTopFace(faceNormals, rapierRot).index;
}
