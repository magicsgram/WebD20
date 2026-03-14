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
  renderer.shadowMap.enabled    = true;
  renderer.shadowMap.type       = THREE.PCFSoftShadowMap;
  renderer.toneMapping          = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure  = 1.2;
  renderer.outputColorSpace     = THREE.SRGBColorSpace;
  // Let Three.js control the canvas size; don't let CSS fight it
  renderer.domElement.style.display = 'block';
  container.appendChild(renderer.domElement);

  // ── Scene ────────────────────────────────────────────────────────────────────
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a1a0e);
  scene.fog = new THREE.FogExp2(0x0a1a0e, 0.045);

  // ── Camera ───────────────────────────────────────────────────────────────────
  const camera = new THREE.PerspectiveCamera(52, w / h, 0.1, 100);
  camera.position.set(0, 11, 15);
  camera.lookAt(0, 1, 0);

  // ── Lights ────────────────────────────────────────────────────────────────────
  scene.add(new THREE.AmbientLight(0xaabbcc, 1.6));

  const sun = new THREE.DirectionalLight(0xfff4e0, 3.5);
  sun.position.set(6, 16, 8);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.near = 0.5;
  sun.shadow.camera.far  = 50;
  sun.shadow.camera.left = sun.shadow.camera.bottom = -10;
  sun.shadow.camera.right = sun.shadow.camera.top   =  10;
  sun.shadow.bias = -0.001;
  scene.add(sun);

  const fill = new THREE.PointLight(0x4488ff, 1.8, 25);
  fill.position.set(-6, 6, -4);
  scene.add(fill);

  const rim = new THREE.PointLight(0xff7733, 0.9, 20);
  rim.position.set(6, 4, -5);
  scene.add(rim);

  // ── Floor ────────────────────────────────────────────────────────────────────
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(24, 24),
    new THREE.MeshStandardMaterial({ color: 0x183d20, roughness: 0.95, metalness: 0.02 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = 0;
  floor.receiveShadow = true;
  scene.add(floor);

  // Grid overlay (felt texture hint)
  const grid = new THREE.GridHelper(12, 24, 0x2e6635, 0x1f4527);
  grid.position.y = 0.002;
  grid.material.opacity = 0.4;
  grid.material.transparent = true;
  scene.add(grid);

  // Tray rim (visible border around the rolling area)
  const rimEdges = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.BoxGeometry(10.2, 0.12, 10.2)),
    new THREE.LineBasicMaterial({ color: 0x44aa55 })
  );
  rimEdges.position.y = 0.06;
  scene.add(rimEdges);

  // ── Resize ───────────────────────────────────────────────────────────────────
  new ResizeObserver(() => {
    const r2 = container.getBoundingClientRect();
    const nw = r2.width  > 10 ? r2.width  : (window.innerWidth  - 304);
    const nh = r2.height > 10 ? r2.height : (window.innerHeight - 52);
    renderer.setSize(nw, nh);
    camera.aspect = nw / nh;
    camera.updateProjectionMatrix();
  }).observe(container);

  return { scene, camera, renderer };
}
