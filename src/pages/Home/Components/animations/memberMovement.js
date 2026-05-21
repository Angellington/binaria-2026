const DEFAULT_CONFIG = {
  orbitDuration: 14000,
  startAngle: 180,
  orbitDirection: -1,
  asteroidRotationDuration: 52000,
  asteroidWobbleDegrees: 5,
  selfRotationEnabled: true,
  minDepthScale: 0.88,
  maxDepthScale: 1.18,
  maskVisibleUntil: 1,
  maskFadeEnd: 1,
  maskSide: "right",
};

const getOrbitTransform = (orbit) => {
  const transform = window.getComputedStyle(orbit).transform;

  if (transform === "none") {
    return new DOMMatrixReadOnly();
  }

  return new DOMMatrixReadOnly(transform);
};

const getMaskOpacity = (localX, radiusX, config) => {
  const xPercent = (localX + radiusX) / (radiusX * 2);

  if (config.maskSide === "left") {
    if (xPercent <= config.maskVisibleUntil) return 0;
    if (xPercent >= config.maskFadeEnd) return 1;

    return (xPercent - config.maskVisibleUntil) / (config.maskFadeEnd - config.maskVisibleUntil);
  }

  if (xPercent <= config.maskVisibleUntil) return 1;
  if (xPercent >= config.maskFadeEnd) return 0;

  return 1 - (xPercent - config.maskVisibleUntil) / (config.maskFadeEnd - config.maskVisibleUntil);
};

const getDepthScale = (localY, radiusY, config) => {
  const depthProgress = (localY + radiusY) / (radiusY * 2);

  return (
    config.minDepthScale +
    depthProgress * (config.maxDepthScale - config.minDepthScale)
  );
};

export const startMemberMovement = (
  element,
  orbitalClassName,
  movementConfig = {}
) => {
  if (!element || !orbitalClassName) return undefined;

  const config = { ...DEFAULT_CONFIG, ...movementConfig };
  const screen = element.offsetParent;
  const orbit = screen?.querySelector(`.${orbitalClassName}`);

  if (!screen || !orbit) return undefined;

  let frameId;
  let startedAt;
  let paused = false;
  let pausedAt = 0;
  let totalPausedTime = 0;

  element.style.willChange = "transform, opacity";
  element.style.transformOrigin = "50% 50%";

  const moveMember = (timestamp) => {
    if (!startedAt) startedAt = timestamp;

    if (paused) {
      frameId = requestAnimationFrame(moveMember);
      return;
    }

    const elapsed = timestamp - startedAt - totalPausedTime;
    const progress = (elapsed % config.orbitDuration) / config.orbitDuration;
    const angleRad =
      ((config.startAngle + config.orbitDirection * progress * 360) * Math.PI) /
      180;
    const radiusX = orbit.offsetWidth / 2;
    const radiusY = orbit.offsetHeight / 2;
    const matrix = getOrbitTransform(orbit);

    const localX = Math.cos(angleRad) * radiusX;
    const localY = Math.sin(angleRad) * radiusY;
    const orbitCenterX = orbit.offsetLeft + radiusX;
    const orbitCenterY = orbit.offsetTop + radiusY;

    const orbitX = orbitCenterX + matrix.a * localX + matrix.c * localY + matrix.e;
    const orbitY = orbitCenterY + matrix.b * localX + matrix.d * localY + matrix.f;

    const memberCenterX = element.offsetLeft + element.offsetWidth / 2;
    const memberCenterY = element.offsetTop + element.offsetHeight / 2;
    const translateX = orbitX - memberCenterX;
    const translateY = orbitY - memberCenterY;
    const rotationProgress = elapsed / config.asteroidRotationDuration;
    const asteroidRotation = config.selfRotationEnabled
      ? rotationProgress * 360 +
        Math.sin(rotationProgress * Math.PI * 4) * config.asteroidWobbleDegrees
      : 0;
    const depthScale = getDepthScale(localY, radiusY, config);

    element.style.opacity = getMaskOpacity(localX, radiusX, config);
    element.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) rotate(${asteroidRotation}deg) scale(${depthScale})`;

    frameId = requestAnimationFrame(moveMember);
  };

  const onMouseEnter = () => {
    paused = true;
    pausedAt = performance.now();
  };

  const onMouseLeave = () => {
    if (!paused) return;

    totalPausedTime += performance.now() - pausedAt;
    paused = false;
  };

  element.addEventListener("mouseenter", onMouseEnter);
  element.addEventListener("mouseleave", onMouseLeave);

  const start = () => {
    frameId = requestAnimationFrame(moveMember);
  };

  if (element.complete) {
    start();
  } else {
    element.addEventListener("load", start, { once: true });
  }

  return () => {
    cancelAnimationFrame(frameId);
    element.removeEventListener("load", start);
    element.removeEventListener("mouseenter", onMouseEnter);
    element.removeEventListener("mouseleave", onMouseLeave);
  };
};
