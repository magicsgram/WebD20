export const COLOR_PALETTE = [
  '#FF7D2D',
  '#FAC846',
  '#A0C382',
  '#5F9B8C',
];

export const DICE_FACE_OPTIONS = [6, 8, 12, 20];

export const RUNTIME_CONFIG = {
  trayScale: {
    minDice: 1,
    maxDice: 24,
    minScale: 0.7,
    maxScale: 1.0,
    baseHalfSize: 6.5,
  },
  flash: {
    relandDurationMs: 2000,
    resultDurationMs: 2500,
  },
  simulation: {
    maxSteps: 500,
    minStableFrames: 24,
    minRollSteps: 40,
    linearStopSpeed: 0.08,
    angularStopSpeed: 0.18,
    verticalStopSpeed: 0.07,
    settleHeight: 1.25,
    faceLandAlignmentMin: 0.85,
    surfaceLandHeightFactor: 1.3,
    surfaceLandHeightMin: 0.78,
  },
  reland: {
    maxAttempts: 8,
    badLanding: {
      verticalLift: 0.0,
      upwardImpulseBase: 28.0,
      upwardImpulseJitterScale: 0,
      lateralImpulse: 0,
      torqueImpulse: 14.0,
      torqueImpulseJitterScale: 0,
      tiltMinDeg: 10,
      tiltMaxDeg: 22,
    },
    userReroll: {
      verticalLift: 0.0,
      upwardImpulseBase: 30.0,
      upwardImpulseJitterScale: 0.25,
      lateralImpulse: 20,
      torqueImpulse: 25,
      torqueImpulseJitterScale: 0.25,
      tiltMinDeg: 5,
      tiltMaxDeg: 10,
    },
  },
  physics: {
    dt: 1 / 60,
    dice: {
      linearDamping: 0.0,
      angularDamping: 0.0,
      friction: 0.005,
      restitution: 0.35,
      density: 2.5,
    },
    world: {
      gravityY: -15.0,
      wallThickness: 0.5,
      wallHalfHeight: 1000,
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
      boundaryInset: 1.35,
      impulseOffset: 0.5,
      torqueStrength: 20,
      centerImpulseStrength: 4,
      upwardImpulseBase: 8,
      upwardImpulseJitter: 0.35,
      upwardVelocityBase: 4.5,
      upwardVelocityJitter: 0.05,
    },
  },
};

export const TRAY_SCALE = RUNTIME_CONFIG.trayScale;
export const FLASH = RUNTIME_CONFIG.flash;
export const SIM = RUNTIME_CONFIG.simulation;
export const RELAND = RUNTIME_CONFIG.reland;
export const BAD_LANDING_RELAND = RELAND.badLanding;
export const USER_REROLL = RELAND.userReroll;
export const PHYS = RUNTIME_CONFIG.physics;
export const SIM_LINEAR_STOP_SPEED_SQ = SIM.linearStopSpeed * SIM.linearStopSpeed;
export const SIM_ANGULAR_STOP_SPEED_SQ = SIM.angularStopSpeed * SIM.angularStopSpeed;

export function getTrayScaleForDiceCount(count) {
  const clamped = Math.min(TRAY_SCALE.maxDice, Math.max(TRAY_SCALE.minDice, count));
  const progress = (clamped - TRAY_SCALE.minDice) / (TRAY_SCALE.maxDice - TRAY_SCALE.minDice);
  return TRAY_SCALE.minScale + (TRAY_SCALE.maxScale - TRAY_SCALE.minScale) * progress;
}

export function getTrayHalfSizeForDiceCount(count) {
  return TRAY_SCALE.baseHalfSize * getTrayScaleForDiceCount(count);
}