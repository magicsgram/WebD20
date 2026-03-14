import RAPIER from '@dimforge/rapier3d';
import { createDie, detectTopFaceIndex, disposeDieMesh } from './dice.js';
import { initScene } from './scene.js';
import './style.css';

// ── UI refs ──────────────────────────────────────────────────────────────────
const diceCountSelect = document.querySelector('#dice-count');
const diceConfigs     = document.querySelector('#dice-configs');
const setAllD6Btn     = document.querySelector('#set-all-d6');
const setAllD20Btn    = document.querySelector('#set-all-d20');
const canvasContainer = document.querySelector('#canvas-container');

const panelToggleBtn = document.createElement('button');
panelToggleBtn.type = 'button';
panelToggleBtn.className = 'canvas-overlay-btn canvas-menu-btn';
panelToggleBtn.textContent = '☰';
panelToggleBtn.setAttribute('aria-label', 'Toggle settings panel');
panelToggleBtn.setAttribute('aria-expanded', 'true');

const fullscreenBtn = document.createElement('button');
fullscreenBtn.type = 'button';
fullscreenBtn.className = 'canvas-overlay-btn canvas-fs-btn';
fullscreenBtn.textContent = 'Fullscreen';

const canvasResultPopup = document.createElement('div');
canvasResultPopup.className = 'canvas-result-popup';

const layoutEl = document.querySelector('.layout');
layoutEl.append(panelToggleBtn);
canvasContainer.append(fullscreenBtn, canvasResultPopup);

const COLOR_PALETTE = [
  '#a6cee3', '#1f78b4', '#b2df8a', '#33a02c',
  '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00',
  '#cab2d6', '#6a3d9a', '#ffff99', '#b15928',
];

let dieColors = [];
let popupTimer = null;
let rollInputLocked = false;

function isCanvasFullscreen() {
  return document.fullscreenElement === canvasContainer;
}

function setPanelHidden(hidden) {
  document.body.classList.toggle('panel-hidden', hidden);
  panelToggleBtn.setAttribute('aria-expanded', String(!hidden));
}

function setRollButtonState(disabled, text) {
  rollInputLocked = disabled;
  canvasContainer.classList.toggle('roll-disabled', disabled);
}

function canTriggerRoll() {
  return !rollInputLocked && !simActive;
}

function tryStartRoll({ forceRestart = false } = {}) {
  if (forceRestart && simActive) {
    startRoll();
    return true;
  }

  if (!canTriggerRoll()) return false;
  startRoll();
  return true;
}

function hideCanvasResultPopup() {
  canvasResultPopup.classList.remove('show');
  canvasResultPopup.innerHTML = '';
}

function showCanvasResultPopup(total, values) {
  const lines = values
    .map((entry) => `<div class="canvas-result-line">${entry}</div>`)
    .join('');
  canvasResultPopup.innerHTML = `<div class="canvas-result-total">Total: ${total}</div>${lines}`;
  canvasResultPopup.classList.add('show');
  if (popupTimer) clearTimeout(popupTimer);
  popupTimer = setTimeout(() => {
    hideCanvasResultPopup();
    popupTimer = null;
  }, 2800);
}

function getContrastTextColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.62 ? '#111111' : '#f8fafc';
}

function shuffledColorsForCount(count) {
  const colors = [];
  while (colors.length < count) {
    const pool = [...COLOR_PALETTE];
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    colors.push(...pool);
  }
  return colors.slice(0, count);
}

function getTrayScaleForDiceCount(count) {
  const minDice = 1;
  const maxDice = 20;
  const minScale = 0.5;
  const maxScale = 1.4;
  const clamped = Math.min(maxDice, Math.max(minDice, count));
  const progress = (clamped - minDice) / (maxDice - minDice);
  return minScale + (maxScale - minScale) * progress;
}

function getTrayHalfSizeForDiceCount(count) {
  const baseTrayHalfSize = 6.5;
  return baseTrayHalfSize * getTrayScaleForDiceCount(count);
}

// ── Dice count selector ──────────────────────────────────────────────────────
for (let i = 1; i <= 20; i++) {
  const o = document.createElement('option');
  o.value = String(i); o.textContent = String(i);
  if (i === 2) o.selected = true;
  diceCountSelect.appendChild(o);
}

function renderDiceSelectors() {
  const count = Number(diceCountSelect.value);
  dieColors = shuffledColorsForCount(count);
  diceConfigs.innerHTML = '';

  const colorOptions = COLOR_PALETTE.map((hex) => {
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
      if (faces === 6) o.selected = true;
      select.appendChild(o);
    });

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

    const controls = document.createElement('div');
    controls.className = 'die-controls';
    controls.append(select, colorSelect);

    wrapper.append(label, controls);
    diceConfigs.appendChild(wrapper);
  }
}

function setAllDiceTypes(value) {
  const selectors = document.querySelectorAll('select[data-die-type="true"]');
  selectors.forEach((select) => {
    select.value = String(value);
  });
}

setAllD6Btn.addEventListener('click', () => setAllDiceTypes(6));
setAllD20Btn.addEventListener('click', () => setAllDiceTypes(20));
renderDiceSelectors();

setRollButtonState(false, 'Roll');

fullscreenBtn.addEventListener('click', async () => {
  try {
    if (isCanvasFullscreen()) {
      await document.exitFullscreen();
    } else {
      await canvasContainer.requestFullscreen();
    }
  } catch {
  }
});

canvasContainer.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  if (target.closest('.canvas-overlay-btn') || target.closest('.canvas-result-popup')) return;
  tryStartRoll({ forceRestart: true });
});

document.addEventListener('fullscreenchange', () => {
  const active = isCanvasFullscreen();
  canvasContainer.classList.toggle('is-fullscreen', active);
  fullscreenBtn.textContent = active ? 'Exit Fullscreen' : 'Fullscreen';
  if (!active) {
    hideCanvasResultPopup();
  }
});

panelToggleBtn.addEventListener('click', () => {
  const hidden = !document.body.classList.contains('panel-hidden');
  setPanelHidden(hidden);
});

// ── Three.js scene ───────────────────────────────────────────────────────────
const { scene, camera, renderer, setTrayHalfSize } = initScene(canvasContainer);

diceCountSelect.addEventListener('change', () => {
  renderDiceSelectors();
  setTrayHalfSize(getTrayHalfSizeForDiceCount(Number(diceCountSelect.value)));
});
setTrayHalfSize(getTrayHalfSizeForDiceCount(Number(diceCountSelect.value)));

// ── Simulation state ─────────────────────────────────────────────────────────
let world     = null;
let entities  = []; // { body, mesh, faceNormals, sides }
let simActive = false;
let stepCount = 0;
let stableFrames = 0;
const MAX_STEPS = 650;
const MIN_STABLE_FRAMES = 24;
const MIN_ROLL_STEPS = 70;
const LINEAR_STOP_SPEED = 0.08;
const ANGULAR_STOP_SPEED = 0.18;
const VERTICAL_STOP_SPEED = 0.07;
const SETTLE_HEIGHT = 1.25;
const LINEAR_STOP_SPEED_SQ = LINEAR_STOP_SPEED * LINEAR_STOP_SPEED;
const ANGULAR_STOP_SPEED_SQ = ANGULAR_STOP_SPEED * ANGULAR_STOP_SPEED;

// ── Shared dice physics config (applies to both d6 and d20) ─────────────────
const DICE_PHYSICS = {
  linearDamping: 0.0,
  angularDamping: 0.0,
  friction: 0.3,
  restitution: 0.14,
  density: 2.1,
};

// ── Physics world builder ────────────────────────────────────────────────────
function buildPhysicsWorld(halfSize) {
  const w = new RAPIER.World({ x: 0, y: -9.81, z: 0 });

  const wallThickness = 0.45;
  const wallHalfHeight = 60;
  const wallRestitution = 0.34;
  const wallFriction = 0.18;

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
    w.createCollider(
      RAPIER.ColliderDesc.cuboid(hx, hy, hz)
        .setRestitution(wallRestitution)
        .setFriction(wallFriction),
      b
    );
  });

  return w;
}

// ── Spawn a die into the physics world ───────────────────────────────────────
function spawnDie(physWorld, dieObj, index, total) {
  const cols = Math.ceil(Math.sqrt(total));
  const row  = Math.floor(index / cols);
  const col  = index % cols;
  const x = (col - (cols - 1) / 2) * 1.3 + (Math.random() - 0.5) * 0.4;
  const z = (row - Math.floor(total / cols) / 2) * 1.3 + (Math.random() - 0.5) * 0.4;
  const y = 1.05 + index * 0.14;

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
  const dieDensity = dieObj.sides === 20
    ? DICE_PHYSICS.density * 0.78
    : DICE_PHYSICS.density;
  colliderDesc
    .setRestitution(DICE_PHYSICS.restitution)
    .setFriction(DICE_PHYSICS.friction)
    .setDensity(dieDensity);
  physWorld.createCollider(colliderDesc, body);

  const launchAngle = Math.random() * Math.PI * 2;
  const launchStrength = 10.8 + Math.random() * 3.2;
  const launchImpulseOffset = 3;
  const launchTorqueStrength = 10;
  const launchUpwardBase = 15.0;
  const launchUpwardRandom = 5.0;
  body.applyImpulse({
    x: Math.cos(launchAngle) * launchStrength,
    y: launchUpwardBase + Math.random() * launchUpwardRandom,
    z: Math.sin(launchAngle) * launchStrength,
  }, true);
  body.applyTorqueImpulse({
    x: (Math.random() - 0.5) * launchImpulseOffset + launchTorqueStrength,
    y: (Math.random() - 0.5) * launchImpulseOffset + launchTorqueStrength,
    z: (Math.random() - 0.5) * launchImpulseOffset + launchTorqueStrength,
  }, true);

  return body;
}

// ── Show face-detected results ────────────────────────────────────────────────
function showResults() {
  let sum = 0;
  const valueItems = [];

  entities.forEach(({ body, mesh, faceNormals, sides }, i) => {
    const rotation = body.rotation();
    const topFaceIdx = detectTopFaceIndex(faceNormals, rotation);
    const value = topFaceIdx + 1;
    sum += value;

    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    if (mats[topFaceIdx]) {
      mats[topFaceIdx].emissive.setHex(0xffd700);
      mats[topFaceIdx].emissiveIntensity  = 0.28;
    }

    valueItems.push(`D${i + 1}: ${value}`);
  });

  setRollButtonState(false, 'Roll Again');
  showCanvasResultPopup(sum, valueItems);
}

// ── Roll handler ─────────────────────────────────────────────────────────────
function startRoll() {
  // Tear down previous
  entities.forEach(e => {
    scene.remove(e.mesh);
    disposeDieMesh(e.mesh);
  });
  entities = [];
  hideCanvasResultPopup();
  if (world) { world.free(); world = null; }

  const selectedDice = Array.from(
    document.querySelectorAll('select[data-die-type="true"]')
  ).map(el => Number(el.value));

  const trayHalfSize = getTrayHalfSizeForDiceCount(selectedDice.length);
  setTrayHalfSize(trayHalfSize);

  world      = buildPhysicsWorld(trayHalfSize);
  stepCount  = 0;
  stableFrames = 0;
  simActive  = true;
  setRollButtonState(true, 'Rolling…');

  selectedDice.forEach((sides, i) => {
    const dieObj = createDie(sides, i, dieColors[i]);
    const body   = spawnDie(world, dieObj, i, selectedDice.length);
    scene.add(dieObj.mesh);
    entities.push({ body, mesh: dieObj.mesh, faceNormals: dieObj.faceNormals, sides });
  });
}

window.addEventListener('keydown', (event) => {
  const isSpaceKey = event.code === 'Space' || event.key === ' ' || event.key === 'Spacebar';
  if (!isSpaceKey || event.repeat) return;

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

    let allSleeping = true;
    let nearFloor = true;
    let nearlyStopped = true;

    for (const { body, mesh } of entities) {
      const t = body.translation();
      const r = body.rotation();
      const lv = body.linvel();
      const av = body.angvel();

      mesh.position.set(t.x, t.y, t.z);
      mesh.quaternion.set(r.x, r.y, r.z, r.w);

      if (!body.isSleeping()) {
        allSleeping = false;
      }

      if (!(t.y <= SETTLE_HEIGHT && Math.abs(lv.y) < VERTICAL_STOP_SPEED)) {
        nearFloor = false;
      }

      const linearSpeedSq = (lv.x * lv.x) + (lv.y * lv.y) + (lv.z * lv.z);
      const angularSpeedSq = (av.x * av.x) + (av.y * av.y) + (av.z * av.z);
      if (!(linearSpeedSq < LINEAR_STOP_SPEED_SQ && angularSpeedSq < ANGULAR_STOP_SPEED_SQ)) {
        nearlyStopped = false;
      }
    }

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
