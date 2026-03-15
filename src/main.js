import { createDie, disposeDieMesh } from './dice.js';
import {
  BAD_LANDING_RELAND,
  PHYS,
  RELAND,
  SIM,
  SIM_ANGULAR_STOP_SPEED_SQ,
  SIM_LINEAR_STOP_SPEED_SQ,
  USER_REROLL,
  getTrayHalfSizeForDiceCount,
} from './config.js';
import {
  buildPhysicsWorld,
  getEvenlySpacedDropPoints,
  inspectDiceLandings,
  relaunchDiceEntities,
  spawnDie,
} from './rollPhysics.js';
import { initScene } from './scene.js';
import { createUIController } from './ui.js';
import './style.css';

let rollInputLocked = false;
const ui = createUIController({
  onDiceConfigurationChanged: clearDiceFromCanvas,
  onDiceCountChanged: (count) => {
    setTrayHalfSize(getTrayHalfSizeForDiceCount(count));
  },
  onRequestRoll: (options) => {
    tryStartRoll(options);
  },
});

const { scene, camera, renderer, setTrayHalfSize } = initScene(ui.canvasContainer);
ui.initialize();

function setRollButtonState(disabled, text) {
  rollInputLocked = disabled;
  ui.setRollInteractionDisabled(disabled);
}

function canTriggerRoll() {
  return !rollInputLocked && !simActive;
}

function tryStartRoll({ forceRestart = false } = {}) {
  if (forceRestart && simActive) {
    relaunchRollingDice();
    return true;
  }

  if (!canTriggerRoll()) return false;
  startRoll();
  return true;
}

function resetSimulationState({ active = false } = {}) {
  stepCount = 0;
  stableFrames = 0;
  relandAttempts = 0;
  simActive = active;
}

function resetRollHighlights(entity) {
  const mats = Array.isArray(entity.mesh.material) ? entity.mesh.material : [entity.mesh.material];
  mats.forEach((mat) => {
    mat.emissive.setHex(entity.baseEmissiveHex);
    mat.emissiveIntensity = 0.08;
  });
}

setRollButtonState(false);

// ── Simulation state ─────────────────────────────────────────────────────────
let world     = null;
let entities  = []; // { body, mesh, faceNormals, sides, physRadius }
let simActive = false;
let stepCount = 0;
let stableFrames = 0;
let relandAttempts = 0;

// ── Show face-detected results ────────────────────────────────────────────────
function showResults(resultEntries = null) {
  let sum = 0;
  const valueItems = [];

  const entries = resultEntries ?? inspectDiceLandings(entities);

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

  setRollButtonState(false);
  ui.showCanvasResultPopup(sum, valueItems);
}

function relaunchInvalidDice(invalidEntries) {
  relandAttempts += 1;
  ui.triggerRelandFlash();

  const relandTargets = invalidEntries.map((entry) => entry.entity);
  relaunchDiceEntities(relandTargets, BAD_LANDING_RELAND);

  stepCount = 0;
  stableFrames = 0;
  simActive = true;
  setRollButtonState(true);
}

function relaunchStabilizedDice({ showFlash = false } = {}) {
  if (!world || entities.length === 0) return false;

  if (showFlash) {
    ui.triggerRelandFlash();
  }
  ui.hideCanvasResultPopup();

  relaunchDiceEntities(entities, USER_REROLL, {
    resetHighlights: true,
    onResetHighlights: resetRollHighlights,
  });

  resetSimulationState({ active: true });
  setRollButtonState(true);
  return true;
}

function relaunchRollingDice() {
  if (!world || entities.length === 0 || !simActive) return false;

  ui.hideCanvasResultPopup();
  relaunchDiceEntities(entities, USER_REROLL, {
    applyVerticalLift: false,
    applyUpwardImpulse: true,
    shouldApplyUpwardImpulse: (entity, translation) => translation.y <= (entity.physRadius * 2),
    onResetHighlights: resetRollHighlights,
  });

  resetSimulationState({ active: true });
  setRollButtonState(true);
  return true;
}

function hasStabilizedDiceOnScreen() {
  return entities.length > 0 && !simActive && ui.hasVisibleResultPopup();
}

function clearDiceFromCanvas() {
  ui.clearRelandFlash();

  entities.forEach((e) => {
    scene.remove(e.mesh);
    disposeDieMesh(e.mesh);
  });
  entities = [];

  ui.hideCanvasResultPopup();

  if (world) {
    world.free();
    world = null;
  }

  resetSimulationState({ active: false });
  setRollButtonState(false);
}

// ── Roll handler ─────────────────────────────────────────────────────────────
function startRoll() {
  if (hasStabilizedDiceOnScreen() && relaunchStabilizedDice({ showFlash: false })) {
    return;
  }

  clearDiceFromCanvas();

  const selectedDice = ui.getSelectedDiceSides();

  const trayHalfSize = getTrayHalfSizeForDiceCount(selectedDice.length);
  setTrayHalfSize(trayHalfSize);

  world = buildPhysicsWorld(trayHalfSize);
  resetSimulationState({ active: true });
  setRollButtonState(true);

  const dieColors = ui.getDieColors();
  const dieObjects = selectedDice.map((sides, i) => createDie(sides, i, dieColors[i]));
  const maxPhysRadius = dieObjects.reduce((max, d) => Math.max(max, d.physRadius), 0);

  const dropPoints = getEvenlySpacedDropPoints(
    selectedDice.length,
    trayHalfSize,
    PHYS.launch.boundaryInset + (maxPhysRadius * 0.9)
  );

  dieObjects.forEach((dieObj, i) => {
    const body = spawnDie(world, dieObj, selectedDice.length, dropPoints[i]);
    scene.add(dieObj.mesh);
    const baseEmissiveHex = dieObj.mesh.material[0]?.emissive?.getHex?.() ?? 0x000000;
    entities.push({
      body,
      mesh: dieObj.mesh,
      faceNormals: dieObj.faceNormals,
      sides: dieObj.sides,
      physRadius: dieObj.physRadius,
      baseEmissiveHex,
    });
  });
}

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
      const landingEntries = inspectDiceLandings(entities);
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
