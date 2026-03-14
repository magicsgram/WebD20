import * as THREE from 'three';

export function initScene(container) {
  // ── Use getBoundingClientRect for reliable size before/after paint ──────────
  const rect = container.getBoundingClientRect();
  const w = rect.width  > 10 ? rect.width  : (window.innerWidth  - 304);
  const h = rect.height > 10 ? rect.height : (window.innerHeight - 52);

  // ── Renderer ────────────────────────────────────────────────────────────────
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled    = false;
  renderer.toneMapping          = THREE.NoToneMapping;
  renderer.toneMappingExposure  = 1.0;
  renderer.outputColorSpace     = THREE.SRGBColorSpace;
  // Let Three.js control the canvas size; don't let CSS fight it
  renderer.domElement.style.display = 'block';
  container.appendChild(renderer.domElement);

  // ── Scene ────────────────────────────────────────────────────────────────────
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  const trayMaterial = new THREE.MeshStandardMaterial({ color: 0x171717, roughness: 0.94, metalness: 0.04 });
  const trayMesh = new THREE.Mesh(new THREE.CircleGeometry(1, 96), trayMaterial);
  trayMesh.rotation.x = -Math.PI / 2;
  trayMesh.position.y = 0.001;
  scene.add(trayMesh);

  const d6Height = 0.68 * 1.72;
  const visibleWallHeight = d6Height * 2;
  const visibleWallThickness = 0.12;
  const wallMaterial = new THREE.MeshStandardMaterial({ color: 0x3a3a3a, roughness: 0.9, metalness: 0.04, side: THREE.DoubleSide });
  const wallInnerMaterial = new THREE.MeshStandardMaterial({ color: 0x323232, roughness: 0.92, metalness: 0.03, side: THREE.DoubleSide });
  const wallTopMaterial = new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.82, metalness: 0.05 });
  const wallOuterRing = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, visibleWallHeight, 96, 1, true), wallMaterial);
  const wallInnerRing = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, visibleWallHeight, 96, 1, true), wallInnerMaterial);
  const wallTopRim = new THREE.Mesh(new THREE.TorusGeometry(1, visibleWallThickness * 0.5, 20, 96), wallTopMaterial);
  wallOuterRing.position.y = visibleWallHeight * 0.5;
  wallInnerRing.position.y = visibleWallHeight * 0.5;
  wallTopRim.rotation.x = Math.PI / 2;
  wallTopRim.position.y = visibleWallHeight;
  scene.add(wallOuterRing, wallInnerRing, wallTopRim);

  // ── Camera ───────────────────────────────────────────────────────────────────
  const camera = new THREE.PerspectiveCamera(52, w / h, 0.1, 140);
  let trayHalfSize = 6.5;
  const trayTargetYOffset = -0.45;
  const trayTarget = new THREE.Vector3(0, trayTargetYOffset, 0);
  const baseDirection = new THREE.Vector3(0, 16, 10).normalize();
  const fitDistanceEpsilon = 0.998;
  const fitDistanceMargin = 1.07;
  const fitCorners = [
    new THREE.Vector3(),
    new THREE.Vector3(),
    new THREE.Vector3(),
    new THREE.Vector3(),
    new THREE.Vector3(),
    new THREE.Vector3(),
    new THREE.Vector3(),
    new THREE.Vector3(),
  ];
  const projected = new THREE.Vector3();

  function setTrayCorners() {
    const step = (Math.PI * 2) / fitCorners.length;
    for (let i = 0; i < fitCorners.length; i++) {
      const a = i * step;
      fitCorners[i].set(Math.cos(a) * trayHalfSize, 0, Math.sin(a) * trayHalfSize);
    }
  }

  function updateTrayMeshSize() {
    trayMesh.scale.set(trayHalfSize, trayHalfSize, 1);
  }

  function updateWallMeshes() {
    const outerRadius = trayHalfSize + (visibleWallThickness * 0.5);
    const innerRadius = Math.max(0.1, trayHalfSize - (visibleWallThickness * 0.5));
    const rimRadius = Math.max(0.1, trayHalfSize);

    wallOuterRing.scale.set(outerRadius, 1, outerRadius);
    wallInnerRing.scale.set(innerRadius, 1, innerRadius);
    wallTopRim.scale.set(rimRadius, rimRadius, 1);
  }

  function placeCameraAtDistance(distance) {
    camera.position.copy(baseDirection).multiplyScalar(distance).add(trayTarget);
    camera.lookAt(trayTarget);
    camera.updateMatrixWorld(true);
  }

  function trayFitsViewportAtDistance(distance) {
    placeCameraAtDistance(distance);

    let maxAbsX = 0;
    let maxAbsY = 0;
    for (let i = 0; i < fitCorners.length; i++) {
      projected.copy(fitCorners[i]).project(camera);
      maxAbsX = Math.max(maxAbsX, Math.abs(projected.x));
      maxAbsY = Math.max(maxAbsY, Math.abs(projected.y));
    }

    return maxAbsX <= fitDistanceEpsilon && maxAbsY <= fitDistanceEpsilon;
  }

  function updateCameraToFitTray(width, height) {
    const safeHeight = Math.max(1, height);
    camera.aspect = Math.max(1, width) / safeHeight;
    camera.updateProjectionMatrix();

    setTrayCorners();

    let near = 0.1;
    let far = 300;
    for (let i = 0; i < 28; i++) {
      const mid = (near + far) * 0.5;
      if (trayFitsViewportAtDistance(mid)) {
        far = mid;
      } else {
        near = mid;
      }
    }

    placeCameraAtDistance(far * fitDistanceMargin);
  }

  updateCameraToFitTray(w, h);
  updateTrayMeshSize();
  updateWallMeshes();

  // ── Lights ────────────────────────────────────────────────────────────────────
  scene.add(new THREE.AmbientLight(0xffffff, 1.0));

  const key = new THREE.DirectionalLight(0xffffff, 0.35);
  key.position.set(5, 11, 6);
  scene.add(key);

  const fill = new THREE.DirectionalLight(0x88aaff, 0.08);
  fill.position.set(-5, 8, -4);
  scene.add(fill);

  function resizeScene() {
    const nextRect = container.getBoundingClientRect();
    const nw = nextRect.width  > 10 ? nextRect.width  : (window.innerWidth  - 304);
    const nh = nextRect.height > 10 ? nextRect.height : (window.innerHeight - 52);
    renderer.setSize(nw, nh);
    updateCameraToFitTray(nw, nh);
  }

  function setTrayHalfSize(nextHalfSize) {
    trayHalfSize = Math.max(2, Number(nextHalfSize) || 6.5);
    updateTrayMeshSize();
    updateWallMeshes();
    resizeScene();
  }

  // ── Resize ───────────────────────────────────────────────────────────────────
  new ResizeObserver(() => {
    resizeScene();
  }).observe(container);

  return { scene, camera, renderer, setTrayHalfSize };
}
