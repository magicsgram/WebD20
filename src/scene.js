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
  scene.fog = new THREE.FogExp2(0x000000, 0.028);

  // ── Camera ───────────────────────────────────────────────────────────────────
  const camera = new THREE.PerspectiveCamera(52, w / h, 0.1, 100);
  camera.position.set(0, 16, 10);
  camera.lookAt(0, 0, 0);

  // ── Lights ────────────────────────────────────────────────────────────────────
  scene.add(new THREE.AmbientLight(0xffffff, 0.85));

  const key = new THREE.DirectionalLight(0xffffff, 1.45);
  key.position.set(5, 11, 6);
  scene.add(key);

  const fill = new THREE.DirectionalLight(0x88aaff, 0.30);
  fill.position.set(-5, 8, -4);
  scene.add(fill);

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
