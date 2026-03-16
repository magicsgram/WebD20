import RAPIER from '@dimforge/rapier3d';
import { detectTopFace, getFaceValueForIndex } from './dice.js';
import { PHYS, SIM, TRAY_SCALE } from './config.js';

function getLaunchDropHeight(diceCount) {
  const t = (Math.max(TRAY_SCALE.minDice, diceCount) - TRAY_SCALE.minDice)
    / Math.max(1, TRAY_SCALE.maxDice - TRAY_SCALE.minDice);

  return {
    base: PHYS.launch.dropHeightBaseMin + (PHYS.launch.dropHeightBaseMax - PHYS.launch.dropHeightBaseMin) * t,
    random: PHYS.launch.dropHeightRandomMin + (PHYS.launch.dropHeightRandomMax - PHYS.launch.dropHeightRandomMin) * t,
  };
}

export function getRandomAngularVelocity(baseSpeed, speedJitter = 0) {
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

  const speed = Math.max(0.1, baseSpeed + ((Math.random() * 2) - 1) * speedJitter);
  return {
    x: (x / length) * speed,
    y: (y / length) * speed,
    z: (z / length) * speed,
  };
}

export function buildPhysicsWorld(halfSize) {
  const world = new RAPIER.World({ x: 0, y: PHYS.world.gravityY, z: 0 });
  world.integrationParameters.dt = PHYS.dt;

  const wallThickness = PHYS.world.wallThickness;
  const wallHalfHeight = PHYS.world.wallHalfHeight;
  const trayRadius = halfSize;

  const floorBody = world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(0, -0.05, 0));
  world.createCollider(
    RAPIER.ColliderDesc.cuboid(trayRadius, 0.1, trayRadius)
      .setRestitution(PHYS.world.floorRestitution)
      .setFriction(PHYS.world.floorFriction),
    floorBody
  );

  for (let i = 0; i < PHYS.world.wallSegments; i++) {
    const angle = (i / PHYS.world.wallSegments) * Math.PI * 2;
    const x = Math.cos(angle) * trayRadius;
    const z = Math.sin(angle) * trayRadius;
    const wallBody = world.createRigidBody(
      RAPIER.RigidBodyDesc.fixed().setTranslation(x, wallHalfHeight - 0.05, z)
    );

    world.createCollider(
      RAPIER.ColliderDesc.cylinder(wallHalfHeight, wallThickness)
        .setRestitution(PHYS.world.wallRestitution)
        .setFriction(PHYS.world.wallFriction),
      wallBody
    );
  }

  return world;
}

export function getEvenlySpacedDropPoints(count, trayHalfSize, inset) {
  const boundaryRadius = Math.max(0.75, trayHalfSize - inset);
  const baseAngle = Math.random() * Math.PI * 2;
  const step = (Math.PI * 2) / Math.max(1, count);

  return Array.from({ length: count }, (_, index) => {
    const angle = baseAngle + (index * step);
    const radius = boundaryRadius * (0.80 + Math.random() * 0.20);
    return { x: Math.cos(angle) * radius, z: Math.sin(angle) * radius };
  });
}

export function spawnDie(physWorld, dieObj, diceCount, dropPoint) {
  const { x, z } = dropPoint;
  const { base, random } = getLaunchDropHeight(diceCount);
  const y = base + (Math.random() * random);

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
  if (dieObj.sides === 6) {
    const halfExtent = dieObj.physRadius * 0.82;
    colliderDesc = RAPIER.ColliderDesc.cuboid(halfExtent, halfExtent, halfExtent);
  } else {
    colliderDesc =
      RAPIER.ColliderDesc.convexHull(dieObj.physHullPositions) ??
      RAPIER.ColliderDesc.ball(dieObj.physRadius * 0.88);
  }

  colliderDesc
    .setRestitution(PHYS.dice.restitution)
    .setFriction(PHYS.dice.friction)
    .setDensity(PHYS.dice.density);
  physWorld.createCollider(colliderDesc, body);

  body.setAngvel(getRandomAngularVelocity(PHYS.launch.torqueStrength, PHYS.launch.impulseOffset), true);

  const upwardVelocity = Math.max(
    0,
    PHYS.launch.upwardVelocityBase + (((Math.random() * 2) - 1) * PHYS.launch.upwardVelocityJitter)
  );
  body.setLinvel({ x: 0, y: upwardVelocity, z: 0 }, true);

  const distance = Math.hypot(x, z);
  const upwardImpulse = Math.max(
    0,
    PHYS.launch.upwardImpulseBase + (((Math.random() * 2) - 1) * PHYS.launch.upwardImpulseJitter)
  );
  const impulseX = distance > 1e-4 ? (-x / distance) * PHYS.launch.centerImpulseStrength * distance : 0;
  const impulseZ = distance > 1e-4 ? (-z / distance) * PHYS.launch.centerImpulseStrength * distance : 0;
  body.applyImpulse({ x: impulseX, y: upwardImpulse, z: impulseZ }, true);

  return body;
}

function getSurfaceLandingHeight(entity) {
  return Math.max(SIM.surfaceLandHeightMin, entity.physRadius * SIM.surfaceLandHeightFactor);
}

export function inspectDiceLandings(entities) {
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

export function relaunchDiceEntities(relaunchTargets, relaunchConfig, {
  resetHighlights = false,
  applyVerticalLift = true,
  applyUpwardImpulse = true,
  shouldApplyUpwardImpulse = null,
  getHeading = null,
  onResetHighlights = null,
} = {}) {
  relaunchTargets.forEach((entity) => {
    const translation = entity.body.translation();
    const lift = applyVerticalLift ? Math.max(relaunchConfig.verticalLift, entity.physRadius * 0.45) : 0;
    const heading = typeof getHeading === 'function'
      ? getHeading(entity, translation)
      : Math.random() * Math.PI * 2;
    const tiltDeg = relaunchConfig.tiltMinDeg + (Math.random() * (relaunchConfig.tiltMaxDeg - relaunchConfig.tiltMinDeg));
    const tiltRad = (tiltDeg * Math.PI) / 180;
    const upwardImpulse = relaunchConfig.upwardImpulseBase * (
      1 + ((((Math.random() * 2) - 1) * (relaunchConfig.upwardImpulseJitterScale ?? 0)))
    );
    const allowUpwardImpulse = applyUpwardImpulse
      && (typeof shouldApplyUpwardImpulse === 'function' ? shouldApplyUpwardImpulse(entity, translation) : true);
    const lateralFromTilt = upwardImpulse * Math.tan(tiltRad);
    const lateralImpulse = Math.max(relaunchConfig.lateralImpulse, lateralFromTilt);
    const torqueImpulseJitter = relaunchConfig.torqueImpulse * (relaunchConfig.torqueImpulseJitterScale ?? 0);

    if (resetHighlights && typeof onResetHighlights === 'function') {
      onResetHighlights(entity);
    }

    entity.body.setTranslation({ x: translation.x, y: translation.y + lift, z: translation.z }, true);
    entity.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
    entity.body.setAngvel({ x: 0, y: 0, z: 0 }, true);
    if (typeof entity.body.wakeUp === 'function') {
      entity.body.wakeUp();
    }

    entity.body.applyImpulse({
      x: Math.cos(heading) * lateralImpulse,
      y: allowUpwardImpulse ? upwardImpulse : 0,
      z: Math.sin(heading) * lateralImpulse,
    }, true);
    entity.body.setAngvel(getRandomAngularVelocity(relaunchConfig.torqueImpulse, torqueImpulseJitter), true);
  });
}