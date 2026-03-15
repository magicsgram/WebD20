import RAPIER from '@dimforge/rapier3d';
import { createDie, detectTopFace, disposeDieMesh, getFaceValueForIndex } from './dice.js';
import { initScene } from './scene.js';
import './style.css';

// ── UI refs ──────────────────────────────────────────────────────────────────
const diceCountSelect = document.querySelector('#dice-count');
const diceConfigs     = document.querySelector('#dice-configs');
const setAllD6Btn     = document.querySelector('#set-all-d6');
const setAllD20Btn    = document.querySelector('#set-all-d20');
const canvasContainer = document.querySelector('#canvas-container');
const sidePanel       = document.querySelector('.side-panel');

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

const totalFlashPopup = document.createElement('div');
totalFlashPopup.className = 'canvas-total-flash';

const relandFlashPopup = document.createElement('div');
relandFlashPopup.className = 'canvas-reroll-flash';
relandFlashPopup.textContent = 'Re-roll';

if (sidePanel) {
  canvasContainer.append(sidePanel);
}
canvasContainer.append(panelToggleBtn, fullscreenBtn, canvasResultPopup);
canvasContainer.append(relandFlashPopup, totalFlashPopup);

const COLOR_PALETTE = [
  '#FF7D2D',
  '#FAC846',
  '#A0C382',
  '#5F9B8C',
];

const RUNTIME_CONFIG = {
  trayScale: {
    minDice: 1,
    maxDice: 24,
    minScale: 0.8,
    maxScale: 1.5,
    baseHalfSize: 6.5,
  },
  flash: {
    relandDurationMs: 2000,
    resultDurationMs: 2500,
  },
  simulation: {
    maxSteps: 450,
    minStableFrames: 24,
    minRollSteps: 40,
    linearStopSpeed: 0.08,
    angularStopSpeed: 0.18,
    verticalStopSpeed: 0.07,
    settleHeight: 1.25,
    faceLandAlignmentMin: 0.90,
    surfaceLandHeightFactor: 1.14,
    surfaceLandHeightMin: 0.78,
  },
  reland: {
    maxAttempts: 8,
    verticalLift: 1.0,
    upwardImpulseBase: 40.0,
    upwardImpulseStep: 0.9,
    lateralImpulse: 3.5,
    torqueImpulse: 4.8,
    tiltMinDeg: 15,
    tiltMaxDeg: 30,
  },
  physics: {
    dice: {
      linearDamping: 0.0,
      angularDamping: 0.0,
      friction: 0.005,
      restitution: 0.5,
      density: 2.1,
    },
    world: {
      gravityY: -11.0,
      wallThickness: 0.5,
      wallHalfHeight: 300,
      wallRestitution: 0.7,
      wallFriction: 0.00,
      floorRestitution: 0.5,
      floorFriction: 0.5,
      wallSegments: 64,
    },
    launch: {
      dropHeightBaseMin: 2.0,
      dropHeightBaseMax: 4.0,
      dropHeightRandomMin: 0.5,
      dropHeightRandomMax: 0.5,
      dropHeightStep: 0.18,
      boundaryInset: 1.35,
      impulseOffset: 0.5,
      torqueStrength: 8,
      centerImpulseStrength: 4,
      upwardImpulseBase: 6,
      upwardImpulseJitter: 0.35,
      upwardVelocityBase: 5.0,
      upwardVelocityJitter: 0.5,
    },
  },
};

const TRAY_SCALE = RUNTIME_CONFIG.trayScale;
const FLASH = RUNTIME_CONFIG.flash;
const SIM = RUNTIME_CONFIG.simulation;
const RELAND = RUNTIME_CONFIG.reland;
const PHYS = RUNTIME_CONFIG.physics;
const SIM_LINEAR_STOP_SPEED_SQ = SIM.linearStopSpeed * SIM.linearStopSpeed;
const SIM_ANGULAR_STOP_SPEED_SQ = SIM.angularStopSpeed * SIM.angularStopSpeed;

let dieColors = [];
let popupTimer = null;
let rollInputLocked = false;
let relandFlashTimer = null;
let activeColorPicker = null;

const colorPickerDialog = document.createElement('dialog');
colorPickerDialog.className = 'color-picker-dialog';
colorPickerDialog.innerHTML = `
  <div class="color-picker-shell">
    <div class="color-picker-title">Choose Color</div>
    <div class="color-picker-palette" role="radiogroup" aria-label="Color palette"></div>
    <button type="button" class="color-picker-close">Close</button>
  </div>
`;
document.body.appendChild(colorPickerDialog);

const colorPickerPalette = colorPickerDialog.querySelector('.color-picker-palette');
const colorPickerCloseBtn = colorPickerDialog.querySelector('.color-picker-close');

function updateColorTriggerButton(button, hex) {
  button.style.backgroundColor = hex;
}

function setPickerActiveSwatch(hex) {
  colorPickerPalette.querySelectorAll('button[data-color]').forEach((swatch) => {
    const isActive = swatch.dataset.color === hex;
    swatch.classList.toggle('is-active', isActive);
    swatch.setAttribute('aria-checked', isActive ? 'true' : 'false');
  });
}

function closeColorPicker() {
  if (colorPickerDialog.open) {
    colorPickerDialog.close();
  }
  activeColorPicker = null;
}

function openColorPickerFor(index, triggerButton) {
  activeColorPicker = { index, triggerButton };
  setPickerActiveSwatch(dieColors[index]);
  if (!colorPickerDialog.open) {
    colorPickerDialog.showModal();
  }
}

COLOR_PALETTE.forEach((hex) => {
  const swatch = document.createElement('button');
  swatch.type = 'button';
  swatch.className = 'color-picker-swatch';
  swatch.dataset.color = hex;
  swatch.style.backgroundColor = hex;
  swatch.setAttribute('role', 'radio');
  swatch.setAttribute('aria-label', `Choose ${hex.toUpperCase()}`);
  swatch.setAttribute('aria-checked', 'false');

  swatch.addEventListener('click', () => {
    if (!activeColorPicker) return;
    const { index, triggerButton } = activeColorPicker;
    if (dieColors[index] !== hex) {
      dieColors[index] = hex;
      updateColorTriggerButton(triggerButton, hex);
      clearDiceFromCanvas();
    }
    closeColorPicker();
  });

  colorPickerPalette.appendChild(swatch);
});

colorPickerCloseBtn.addEventListener('click', closeColorPicker);
colorPickerDialog.addEventListener('cancel', () => {
  activeColorPicker = null;
});
colorPickerDialog.addEventListener('close', () => {
  activeColorPicker = null;
});

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
  if (popupTimer) {
    clearTimeout(popupTimer);
    popupTimer = null;
  }
  totalFlashPopup.classList.remove('show');
  canvasResultPopup.classList.remove('show');
  canvasResultPopup.innerHTML = '';
}

function triggerTotalFlash(total) {
  totalFlashPopup.textContent = `Total: ${total}`;
  totalFlashPopup.classList.remove('show');
  void totalFlashPopup.offsetWidth;
  totalFlashPopup.classList.add('show');
}

function triggerRelandFlash() {
  if (relandFlashTimer) {
    clearTimeout(relandFlashTimer);
    relandFlashTimer = null;
  }

  relandFlashPopup.classList.remove('show');
  void relandFlashPopup.offsetWidth;
  relandFlashPopup.classList.add('show');

  relandFlashTimer = setTimeout(() => {
    relandFlashPopup.classList.remove('show');
    relandFlashTimer = null;
  }, FLASH.relandDurationMs);
}

function showCanvasResultPopup(total, values) {
  const lines = values
    .map((entry) => `<div class="canvas-result-line">${entry}</div>`)
    .join('');
  canvasResultPopup.innerHTML = `<div class="canvas-result-total">Total: ${total}</div>${lines}`;
  canvasResultPopup.classList.add('show');
  triggerTotalFlash(total);
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
  const clamped = Math.min(TRAY_SCALE.maxDice, Math.max(TRAY_SCALE.minDice, count));
  const progress = (clamped - TRAY_SCALE.minDice) / (TRAY_SCALE.maxDice - TRAY_SCALE.minDice);
  return TRAY_SCALE.minScale + (TRAY_SCALE.maxScale - TRAY_SCALE.minScale) * progress;
}

function getTrayHalfSizeForDiceCount(count) {
  return TRAY_SCALE.baseHalfSize * getTrayScaleForDiceCount(count);
}

function getRandomTorqueImpulse(baseStrength, strengthJitter = 0) {
  let x = (Math.random() * 2) - 1;
  let y = (Math.random() * 2) - 1;
  let z = (Math.random() * 2) - 1;
  let length = Math.hypot(x, y, z);

  if (length < 1e-4) {
    x = 1;
    y = 0;
    z = 0;
    length = 1;
  }

  const strength = Math.max(0.1, baseStrength + ((Math.random() * 2) - 1) * strengthJitter);
  return {
    x: (x / length) * strength,
    y: (y / length) * strength,
    z: (z / length) * strength,
  };
}

// ── Dice count selector ──────────────────────────────────────────────────────
for (let i = TRAY_SCALE.minDice; i <= TRAY_SCALE.maxDice; i++) {
  const o = document.createElement('option');
  o.value = String(i); o.textContent = String(i);
  if (i === 2) o.selected = true;
  diceCountSelect.appendChild(o);
}

function renderDiceSelectors() {
  const count = Number(diceCountSelect.value);
  dieColors = shuffledColorsForCount(count);
  diceConfigs.innerHTML = '';

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

    const colorButton = document.createElement('button');
    colorButton.type = 'button';
    colorButton.id = `die-color-${i}`;
    colorButton.dataset.dieColor = 'true';
    colorButton.className = 'die-color-trigger';
    colorButton.setAttribute('aria-label', `Choose color for Die ${i + 1}`);
    updateColorTriggerButton(colorButton, dieColors[i]);

    colorButton.addEventListener('click', () => {
      openColorPickerFor(i, colorButton);
    });

    const controls = document.createElement('div');
    controls.className = 'die-controls';
    controls.append(select, colorButton);

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

setAllD6Btn.addEventListener('click', () => {
  setAllDiceTypes(6);
  clearDiceFromCanvas();
});
setAllD20Btn.addEventListener('click', () => {
  setAllDiceTypes(20);
  clearDiceFromCanvas();
});
diceConfigs.addEventListener('change', (event) => {
  const target = event.target;
  if (!(target instanceof HTMLSelectElement)) return;
  if (target.dataset.dieType === 'true') {
    clearDiceFromCanvas();
  }
});
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
  if (target.closest('.canvas-overlay-btn') || target.closest('.canvas-result-popup') || target.closest('.side-panel')) return;
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
  clearDiceFromCanvas();
  renderDiceSelectors();
  setTrayHalfSize(getTrayHalfSizeForDiceCount(Number(diceCountSelect.value)));
});
setTrayHalfSize(getTrayHalfSizeForDiceCount(Number(diceCountSelect.value)));

// ── Simulation state ─────────────────────────────────────────────────────────
let world     = null;
let entities  = []; // { body, mesh, faceNormals, sides, physRadius }
let simActive = false;
let stepCount = 0;
let stableFrames = 0;
let relandAttempts = 0;

// ── Physics world builder ────────────────────────────────────────────────────
function buildPhysicsWorld(halfSize) {
  const w = new RAPIER.World({ x: 0, y: PHYS.world.gravityY, z: 0 });

  const wallThickness = PHYS.world.wallThickness;
  const wallHalfHeight = PHYS.world.wallHalfHeight;
  const wallRestitution = PHYS.world.wallRestitution;
  const wallFriction = PHYS.world.wallFriction;
  const trayRadius = halfSize;
  const wallSegments = PHYS.world.wallSegments;

  // Floor slab
  const fb = w.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(0, -0.05, 0));
  w.createCollider(
    RAPIER.ColliderDesc.cuboid(trayRadius, 0.1, trayRadius)
      .setRestitution(PHYS.world.floorRestitution)
      .setFriction(PHYS.world.floorFriction),
    fb
  );

  // Circular wall made of vertical cylinder segments
  for (let i = 0; i < wallSegments; i++) {
    const angle = (i / wallSegments) * Math.PI * 2;
    const x = Math.cos(angle) * trayRadius;
    const z = Math.sin(angle) * trayRadius;
    const b = w.createRigidBody(
      RAPIER.RigidBodyDesc.fixed().setTranslation(x, wallHalfHeight - 0.05, z)
    );
    w.createCollider(
      RAPIER.ColliderDesc.cylinder(wallHalfHeight, wallThickness)
        .setRestitution(wallRestitution)
        .setFriction(wallFriction),
      b
    );
  }

  return w;
}

// ── Spawn a die into the physics world ───────────────────────────────────────
function getLaunchDropHeight(diceCount) {
  const t = (Math.max(TRAY_SCALE.minDice, diceCount) - TRAY_SCALE.minDice)
    / Math.max(1, TRAY_SCALE.maxDice - TRAY_SCALE.minDice);
  return {
    base: PHYS.launch.dropHeightBaseMin + (PHYS.launch.dropHeightBaseMax - PHYS.launch.dropHeightBaseMin) * t,
    random: PHYS.launch.dropHeightRandomMin + (PHYS.launch.dropHeightRandomMax - PHYS.launch.dropHeightRandomMin) * t,
  };
}

function getEvenlySpacedDropPoints(count, trayHalfSize, inset) {
  const boundaryRadius = Math.max(0.75, trayHalfSize - inset);
  const baseAngle = Math.random() * Math.PI * 2;
  const step = (Math.PI * 2) / Math.max(1, count);
  return Array.from({ length: count }, (_, i) => {
    const angle = baseAngle + i * step;
    // Per-die radius jitter keeps placement feeling random
    const radius = boundaryRadius * (0.80 + Math.random() * 0.20);
    return { x: Math.cos(angle) * radius, z: Math.sin(angle) * radius };
  });
}

function spawnDie(physWorld, dieObj, index, trayHalfSize, diceCount, dropPoint) {
  const { x, z } = dropPoint;
  const { base, random } = getLaunchDropHeight(diceCount);
  const y = base + (Math.random() * random) + (index * PHYS.launch.dropHeightStep);

  const bodyDesc = RAPIER.RigidBodyDesc.dynamic()
    .setTranslation(x, y, z)
    .setLinearDamping(PHYS.dice.linearDamping)
    .setAngularDamping(PHYS.dice.angularDamping);

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
    ? PHYS.dice.density * 0.78
    : PHYS.dice.density;
  colliderDesc
    .setRestitution(PHYS.dice.restitution)
    .setFriction(PHYS.dice.friction)
    .setDensity(dieDensity);
  physWorld.createCollider(colliderDesc, body);

  const launchImpulseOffset = PHYS.launch.impulseOffset;
  const launchTorqueStrength = PHYS.launch.torqueStrength;
  body.applyTorqueImpulse(getRandomTorqueImpulse(launchTorqueStrength, launchImpulseOffset), true);

  // Velocity kick is mass-independent, so upward launch is always visible.
  const upwardVelocity = Math.max(
    0,
    PHYS.launch.upwardVelocityBase + (((Math.random() * 2) - 1) * PHYS.launch.upwardVelocityJitter)
  );
  body.setLinvel({ x: 0, y: upwardVelocity, z: 0 }, true);

  // Launch towards center with a configurable upward kick.
  const dist = Math.hypot(x, z);
  const cs = PHYS.launch.centerImpulseStrength;
  const upwardImpulse = Math.max(
    0,
    PHYS.launch.upwardImpulseBase + (((Math.random() * 2) - 1) * PHYS.launch.upwardImpulseJitter)
  );
  const impulseX = dist > 1e-4 ? (-x / dist) * cs * dist : 0;
  const impulseZ = dist > 1e-4 ? (-z / dist) * cs * dist : 0;
  body.applyImpulse({ x: impulseX, y: upwardImpulse, z: impulseZ }, true);

  return body;
}

// ── Show face-detected results ────────────────────────────────────────────────
function showResults(resultEntries = null) {
  let sum = 0;
  const valueItems = [];

  const entries = resultEntries ?? inspectDiceLandings();

  entries.forEach(({ entity, value, topFaceIdx }, i) => {
    const { mesh } = entity;
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

function getSurfaceLandingHeight(entity) {
  return Math.max(SIM.surfaceLandHeightMin, entity.physRadius * SIM.surfaceLandHeightFactor);
}

function inspectDiceLandings() {
  return entities.map((entity) => {
    const rotation = entity.body.rotation();
    const topFace = detectTopFace(entity.faceNormals, rotation);
    const value = getFaceValueForIndex(entity.sides, topFace.index);
    const translation = entity.body.translation();
    const onSurface = translation.y <= getSurfaceLandingHeight(entity);
    const faceLanded = topFace.alignment >= SIM.faceLandAlignmentMin;

    return {
      entity,
      topFaceIdx: topFace.index,
      value,
      onSurface,
      faceLanded,
      valid: onSurface && faceLanded,
    };
  });
}

function relaunchInvalidDice(invalidEntries) {
  relandAttempts += 1;
  triggerRelandFlash();
  const upwardImpulse = RELAND.upwardImpulseBase + ((relandAttempts - 1) * RELAND.upwardImpulseStep);

  const relandTargets = invalidEntries.map((entry) => entry.entity);

  relandTargets.forEach((entity) => {
    const { body, physRadius } = entity;
    const t = body.translation();
    const lift = Math.max(RELAND.verticalLift, physRadius * 0.45);
    const heading = Math.random() * Math.PI * 2;
    const tiltDeg = RELAND.tiltMinDeg + (Math.random() * (RELAND.tiltMaxDeg - RELAND.tiltMinDeg));
    const tiltRad = (tiltDeg * Math.PI) / 180;
    const lateralFromTilt = upwardImpulse * Math.tan(tiltRad);
    const lateralImpulse = Math.max(RELAND.lateralImpulse, lateralFromTilt);

    body.setTranslation({ x: t.x, y: t.y + lift, z: t.z }, true);
    body.setLinvel({ x: 0, y: 0, z: 0 }, true);
    body.setAngvel({ x: 0, y: 0, z: 0 }, true);
    if (typeof body.wakeUp === 'function') {
      body.wakeUp();
    }

    body.applyImpulse({
      x: Math.cos(heading) * lateralImpulse,
      y: upwardImpulse,
      z: Math.sin(heading) * lateralImpulse,
    }, true);
    body.applyTorqueImpulse(getRandomTorqueImpulse(RELAND.torqueImpulse), true);
  });

  stepCount = 0;
  stableFrames = 0;
  simActive = true;
  setRollButtonState(true, 'Rolling…');
}

function clearDiceFromCanvas() {
  if (relandFlashTimer) {
    clearTimeout(relandFlashTimer);
    relandFlashTimer = null;
  }
  relandFlashPopup.classList.remove('show');

  entities.forEach((e) => {
    scene.remove(e.mesh);
    disposeDieMesh(e.mesh);
  });
  entities = [];

  hideCanvasResultPopup();

  if (world) {
    world.free();
    world = null;
  }

  simActive = false;
  stepCount = 0;
  stableFrames = 0;
  relandAttempts = 0;
  setRollButtonState(false, 'Roll');
}

// ── Roll handler ─────────────────────────────────────────────────────────────
function startRoll() {
  clearDiceFromCanvas();

  const selectedDice = Array.from(
    document.querySelectorAll('select[data-die-type="true"]')
  ).map(el => Number(el.value));

  const trayHalfSize = getTrayHalfSizeForDiceCount(selectedDice.length);
  setTrayHalfSize(trayHalfSize);

  world      = buildPhysicsWorld(trayHalfSize);
  stepCount  = 0;
  stableFrames = 0;
  relandAttempts = 0;
  simActive  = true;
  setRollButtonState(true, 'Rolling…');

  const dieObjects = selectedDice.map((sides, i) => createDie(sides, i, dieColors[i]));
  const maxPhysRadius = dieObjects.reduce((max, d) => Math.max(max, d.physRadius), 0);

  const dropPoints = getEvenlySpacedDropPoints(
    selectedDice.length,
    trayHalfSize,
    PHYS.launch.boundaryInset + (maxPhysRadius * 0.9)
  );

  dieObjects.forEach((dieObj, i) => {
    const body = spawnDie(world, dieObj, i, trayHalfSize, selectedDice.length, dropPoints[i]);
    scene.add(dieObj.mesh);
    entities.push({ body, mesh: dieObj.mesh, faceNormals: dieObj.faceNormals, sides: dieObj.sides, physRadius: dieObj.physRadius });
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

      if (!(t.y <= SIM.settleHeight && Math.abs(lv.y) < SIM.verticalStopSpeed)) {
        nearFloor = false;
      }

      const linearSpeedSq = (lv.x * lv.x) + (lv.y * lv.y) + (lv.z * lv.z);
      const angularSpeedSq = (av.x * av.x) + (av.y * av.y) + (av.z * av.z);
      if (!(linearSpeedSq < SIM_LINEAR_STOP_SPEED_SQ && angularSpeedSq < SIM_ANGULAR_STOP_SPEED_SQ)) {
        nearlyStopped = false;
      }
    }

    const canEvaluateStable = stepCount >= SIM.minRollSteps;
    stableFrames = canEvaluateStable && nearFloor && nearlyStopped ? stableFrames + 1 : 0;

    if ((allSleeping && nearFloor) || stableFrames >= SIM.minStableFrames || stepCount >= SIM.maxSteps) {
      const landingEntries = inspectDiceLandings();
      const invalidEntries = landingEntries.filter((entry) => !entry.valid);

      if (invalidEntries.length > 0 && relandAttempts < RELAND.maxAttempts) {
        relaunchInvalidDice(invalidEntries);
      } else {
        simActive = false;
        showResults(landingEntries);
      }
    }
  }

  renderer.render(scene, camera);
}

animate();
