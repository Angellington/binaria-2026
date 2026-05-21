import { startMemberMovement } from "./memberMovement";

export const startNagaoMovement = (element, orbitalClassName) => {
  return startMemberMovement(element, orbitalClassName, {
    orbitDuration: 29000,
    startAngle: 180,
    orbitDirection: -1,
    asteroidRotationDuration: 52000,
    asteroidWobbleDegrees: 5,
    minDepthScale: 0.88,
    maxDepthScale: 1.08,
    maskVisibleUntil: 0.3,
    maskFadeEnd: 0.4,
  });
};
