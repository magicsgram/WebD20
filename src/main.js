import RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';
import { createDie, detectValue } from './dice.js';
import { initScene } from './scene.js';
import './style.css';

// ── UI refs ──────────────────────────────────────────────────────────────────
const diceCountSelect = document.querySelector('#dice-count');
const diceConfigs     = document.querySelector('#dice-configs');
const setAllD6Btn     = document.querySelector('#set-all-d6');
const setAllD20Btn    = document.querySelector('#set-all-d20');
const rollBtn         = document.querySelector('#roll-btn');
const resultsList     = document.querySelector('#results-list');
const totalEl         = document.querySelector('#total');
const canvasContainer = document.querySelector('#canvas-container');

const COLOR_PALETTE = [
  '#a6cee3', '#1f78b4', '#b2df8a', '#33a02c',
  '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00',
  '#cab2d6', '#6a3d9a', '#ffff99', '#b15928',
];

let dieColors = [];

function getContrastTextColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.62 ? '#111111' : '#f8fafc';
}

function shuffledColorsForCount(count) {
  const pool = [...COLOR_PALETTE];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}

// ── Dice count selector ──────────────────────────────────────────────────────
for (let i = 1; i <= 12; i++) {
  const o = document.createElement('option');
  o.value = String(i); o.textContent = String(i);
  if (i === 3) o.selected = true;
  diceCountSelect.appendChild(o);
}

function renderDiceSelectors() {
  const count = Number(diceCountSelect.value);
  dieColors = shuffledColorsForCount(count);
  diceConfigs.innerHTML = '';

  const colorOptions = COLOR_PALETTE.map((hex, idx) => {
    const option = document.createElement('option');
    option.value = hex;
    option.textContent = '';
    option.style.backgroundColor = hex;
    option.style.color = getContrastTextColor(hex);
    return option;
  });

  for (let i = 0; i < count; i++) {
    const wrapper = document.createElement('div');
    wrapper.className = 'die-config';

    const label = document.createElement('label');
    label.setAttribute('for', `die-type-${i}`);
    label.textContent = `Die ${i + 1}`;

    const select = document.createElement('select');
    select.id = `die-type-${i}`;
    select.dataset.dieType = 'true';
    select.className = 'die-type-select';

    [6, 20].forEach(faces => {
      const o = document.createElement('option');
      o.value = String(faces); o.textContent = `d${faces}`;
      if (faces === 20) o.selected = true;
      select.appendChild(o);
    });

    const colorLabel = document.createElement('label');
    colorLabel.setAttribute('for', `die-color-${i}`);
    colorLabel.textContent = '';

    const colorSelect = document.createElement('select');
    colorSelect.id = `die-color-${i}`;
    colorSelect.dataset.dieColor = 'true';
    colorSelect.className = 'die-color-select';
    colorOptions.forEach((option) => colorSelect.appendChild(option.cloneNode(true)));
    colorSelect.value = dieColors[i];

    const applyColorSelectStyle = () => {
      const selectedHex = colorSelect.value;
      colorSelect.style.backgroundColor = selectedHex;
      colorSelect.style.color = getContrastTextColor(selectedHex);
    };

    colorSelect.addEventListener('change', () => {
      dieColors[i] = colorSelect.value;
      applyColorSelectStyle();
    });
    applyColorSelectStyle();

    wrapper.append(label, select, colorLabel, colorSelect);
    diceConfigs.appendChild(wrapper);
  }
}

function setAllDiceTypes(value) {
  const selectors = document.querySelectorAll('select[data-die-type="true"]');
  selectors.forEach((select) => {
    select.value = String(value);
  });
}

diceCountSelect.addEventListener('change', renderDiceSelectors);
setAllD6Btn.addEventListener('click', () => setAllDiceTypes(6));
setAllD20Btn.addEventListener('click', () => setAllDiceTypes(20));
renderDiceSelectors();

// ── Three.js scene ───────────────────────────────────────────────────────────
const { scene, camera, renderer } = initScene(canvasContainer);

// ── Simulation state ─────────────────────────────────────────────────────────
let world     = null;
let entities  = []; // { body, mesh, faceNormals, sides }
let simActive = false;
let stepCount = 0;
let stableFrames = 0;
const MAX_STEPS = 480;
const MIN_STABLE_FRAMES = 24;
const MIN_ROLL_STEPS = 70;
const LINEAR_STOP_SPEED = 0.08;
const ANGULAR_STOP_SPEED = 0.18;
const VERTICAL_STOP_SPEED = 0.07;
const SETTLE_HEIGHT = 1.25;

// ── Shared dice physics config (applies to both d6 and d20) ─────────────────
const DICE_PHYSICS = {
  linearDamping: 0.0,
  angularDamping: 0.0,
  friction: 0.3,
  restitution: 0.14,
  density: 2.1,
};

// ── Physics world builder ────────────────────────────────────────────────────
function buildPhysicsWorld() {
  const w = new RAPIER.World({ x: 0, y: -9.81, z: 0 });

  const wallThickness = 0.45;
  const wallHalfHeight = 8;
  const halfSize = 6.5;

  // Floor slab
  const fb = w.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(0, -0.05, 0));
  w.createCollider(
    RAPIER.ColliderDesc.cuboid(halfSize, 0.1, halfSize).setRestitution(0.12).setFriction(0.82),
    fb
  );

  // Four walls (X+, X-, Z+, Z-) + invisible ceiling
  [[ halfSize, wallHalfHeight - 0.05, 0, wallThickness, wallHalfHeight, halfSize],
   [-halfSize, wallHalfHeight - 0.05, 0, wallThickness, wallHalfHeight, halfSize],
   [0, wallHalfHeight - 0.05, halfSize, halfSize, wallHalfHeight, wallThickness],
   [0, wallHalfHeight - 0.05, -halfSize, halfSize, wallHalfHeight, wallThickness]].forEach(([x, y, z, hx, hy, hz]) => {
    const b = w.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(x, y, z));
    w.createCollider(RAPIER.ColliderDesc.cuboid(hx, hy, hz), b);
  });

  const ceilingBody = w.createRigidBody(
    RAPIER.RigidBodyDesc.fixed().setTranslation(0, 14, 0)
  );
  w.createCollider(RAPIER.ColliderDesc.cuboid(halfSize, 0.2, halfSize), ceilingBody);

  return w;
}

// ── Spawn a die into the physics world ───────────────────────────────────────
function spawnDie(physWorld, dieObj, index, total) {
  const cols = Math.ceil(Math.sqrt(total));
  const row  = Math.floor(index / cols);
  const col  = index % cols;
  const x = (col - (cols - 1) / 2) * 1.3 + (Math.random() - 0.5) * 0.4;
  const z = (row - Math.floor(total / cols) / 2) * 1.3 + (Math.random() - 0.5) * 0.4;
  const y = 4.5 + index * 0.55;

  const bodyDesc = RAPIER.RigidBodyDesc.dynamic()
    .setTranslation(x, y, z)
    .setLinearDamping(DICE_PHYSICS.linearDamping)
    .setAngularDamping(DICE_PHYSICS.angularDamping);

  if (typeof bodyDesc.setCcdEnabled === 'function') {
    bodyDesc.setCcdEnabled(true);
  }

  const body = physWorld.createRigidBody(bodyDesc);
  if (typeof body.enableCcd === 'function') {
    body.enableCcd(true);
  }

  let colliderDesc;
  // Use simple primitives — convexHull can silently return null for
  // non-indexed vertex buffers with duplicate points.
  if (dieObj.sides === 6) {
    const h = dieObj.physRadius * 0.82;
    colliderDesc = RAPIER.ColliderDesc.cuboid(h, h, h);
  } else {
    colliderDesc =
      RAPIER.ColliderDesc.convexHull(dieObj.physHullPositions) ??
      RAPIER.ColliderDesc.ball(dieObj.physRadius * 0.88);
  }
  colliderDesc
    .setRestitution(DICE_PHYSICS.restitution)
    .setFriction(DICE_PHYSICS.friction)
    .setDensity(DICE_PHYSICS.density);
  physWorld.createCollider(colliderDesc, body);

  body.applyImpulse({
    x: (Math.random() - 0.5) * 6.8,
    y: 3.4 + Math.random() * 3.0,
    z: (Math.random() - 0.5) * 6.8,
  }, true);
  body.applyTorqueImpulse({
    x: (Math.random() - 0.5) * 16,
    y: (Math.random() - 0.5) * 16,
    z: (Math.random() - 0.5) * 16,
  }, true);

  return body;
}

// ── Show face-detected results ────────────────────────────────────────────────
function showResults() {
  resultsList.innerHTML = '';
  let sum = 0;

  entities.forEach(({ body, mesh, faceNormals, sides }, i) => {
    const value = detectValue(faceNormals, body.rotation());
    sum += value;

    // Highlight top face with gold emissive
    const rot = body.rotation();
    const q   = new THREE.Quaternion(rot.x, rot.y, rot.z, rot.w);
    const up  = new THREE.Vector3(0, 1, 0);
    let topFaceIdx = 0, best = -Infinity;
    faceNormals.forEach((n, idx) => {
      const d = n.clone().applyQuaternion(q).dot(up);
      if (d > best) { best = d; topFaceIdx = idx; }
    });
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    if (mats[topFaceIdx]) {
      mats[topFaceIdx].emissive           = new THREE.Color(0xffd700);
      mats[topFaceIdx].emissiveIntensity  = 0.6;
    }

    const li = document.createElement('li');
    li.textContent = `Die ${i + 1} (d${sides}): ${value}`;
    resultsList.appendChild(li);
  });

  totalEl.textContent   = `Total: ${sum}`;
  rollBtn.disabled      = false;
  rollBtn.textContent   = 'Roll Again';
}

// ── Roll handler ─────────────────────────────────────────────────────────────
function startRoll() {
  // Tear down previous
  entities.forEach(e => {
    scene.remove(e.mesh);
    e.mesh.geometry.dispose();
    (Array.isArray(e.mesh.material) ? e.mesh.material : [e.mesh.material])
      .forEach(m => { if (m.map) m.map.dispose(); m.dispose(); });
  });
  entities = [];
  resultsList.innerHTML = '';
  totalEl.textContent   = '';
  if (world) { world.free(); world = null; }

  const selectedDice = Array.from(
    document.querySelectorAll('select[data-die-type="true"]')
  ).map(el => Number(el.value));

  world      = buildPhysicsWorld();
  stepCount  = 0;
  stableFrames = 0;
  simActive  = true;
  rollBtn.disabled    = true;
  rollBtn.textContent = 'Rolling…';

  selectedDice.forEach((sides, i) => {
    const dieObj = createDie(sides, i, dieColors[i]);
    const body   = spawnDie(world, dieObj, i, selectedDice.length);
    scene.add(dieObj.mesh);
    entities.push({ body, mesh: dieObj.mesh, faceNormals: dieObj.faceNormals, sides });
  });
}

rollBtn.addEventListener('click', startRoll);

window.addEventListener('keydown', (event) => {
  if (event.code !== 'Space' || event.repeat || rollBtn.disabled) return;

  const active = document.activeElement;
  const tag = active?.tagName;
  const inFormControl = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
  if (inFormControl) return;

  event.preventDefault();
  startRoll();
});

// ── Render / animation loop ───────────────────────────────────────────────────
function animate() {
  requestAnimationFrame(animate);

  if (simActive && world) {
    world.step();
    stepCount++;

    for (const { body, mesh } of entities) {
      const t = body.translation();
      const r = body.rotation();
      mesh.position.set(t.x, t.y, t.z);
      mesh.quaternion.set(r.x, r.y, r.z, r.w);
    }

    const allSleeping = entities.every(e => e.body.isSleeping());
    const nearFloor = entities.every(({ body }) => {
      const t = body.translation();
      const lv = body.linvel();
      return t.y <= SETTLE_HEIGHT && Math.abs(lv.y) < VERTICAL_STOP_SPEED;
    });
    const nearlyStopped = entities.every(({ body }) => {
      const lv = body.linvel();
      const av = body.angvel();
      const linearSpeed = Math.hypot(lv.x, lv.y, lv.z);
      const angularSpeed = Math.hypot(av.x, av.y, av.z);
      return linearSpeed < LINEAR_STOP_SPEED && angularSpeed < ANGULAR_STOP_SPEED;
    });

    const canEvaluateStable = stepCount >= MIN_ROLL_STEPS;
    stableFrames = canEvaluateStable && nearFloor && nearlyStopped ? stableFrames + 1 : 0;

    if ((allSleeping && nearFloor) || stableFrames >= MIN_STABLE_FRAMES || stepCount >= MAX_STEPS) {
      simActive = false;
      showResults();
    }
  }

  renderer.render(scene, camera);
}

animate();
