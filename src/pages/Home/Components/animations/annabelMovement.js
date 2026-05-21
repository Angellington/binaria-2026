import { startMemberMovement } from "./memberMovement";

export const startAnnabelMovement = (element, orbitalClassName) => {
  return startMemberMovement(element, orbitalClassName, {
    orbitDuration: 7000,
    startAngle: 180,
    orbitDirection: 1,
    asteroidRotationDuration: 52000,
    asteroidWobbleDegrees: 5,
    minDepthScale: 0.88,
    maxDepthScale: 1.18,
    maskVisibleUntil: 1,
    maskFadeEnd: 1,
  });
};
