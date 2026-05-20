// nagaoMovements.js

const ORBIT_DURATION = 29000;
const START_ANGLE = 180;
const ASTEROID_ROTATION_DURATION = 52000;
const ASTEROID_WOBBLE_DEGREES = 5;
const MIN_DEPTH_SCALE = 0.88;
const MAX_DEPTH_SCALE = 1.08;
const MASK_VISIBLE_UNTIL = 0.3;
const MASK_FADE_END = 0.4;

const getOrbitTransform = (orbit) => {
  const transform = window.getComputedStyle(orbit).transform;

  if (transform === "none") {
    return new DOMMatrixReadOnly();
  }

  return new DOMMatrixReadOnly(transform);
};

const getMaskOpacity = (localX, radiusX) => {
  const xPercent = (localX + radiusX) / (radiusX * 2);

  if (xPercent <= MASK_VISIBLE_UNTIL) return 1;
  if (xPercent >= MASK_FADE_END) return 0;

  return 1 - (xPercent - MASK_VISIBLE_UNTIL) / (MASK_FADE_END - MASK_VISIBLE_UNTIL);
};

const getDepthScale = (localY, radiusY) => {
  const depthProgress = (localY + radiusY) / (radiusY * 2);

  return MIN_DEPTH_SCALE + depthProgress * (MAX_DEPTH_SCALE - MIN_DEPTH_SCALE);
};

export const startNagaoMovement = (element, orbitalClassName) => {
  if (!element || !orbitalClassName) return undefined

  const screen = element.offsetParent;
  const orbit = screen?.querySelector(`.${orbitalClassName}`);


  if (!screen || !orbit) return undefined;

  let frameId;
  let startedAt;
  let paused = false;
  let pausedAt = 0;
  let totalPausedTime = 0;

  element.style.willChange = "transform, opacity"; // Avisa ao navegador o que vai
  element.style.transformOrigin = "50% 50%";



  const moveNagao = (timestamp) => {
    if (!startedAt) startedAt = timestamp;


    if(paused){
      frameId = requestAnimationFrame(moveNagao);
      return;
    }

    const elapsed = timestamp - startedAt - totalPausedTime;
    const progress = (elapsed % ORBIT_DURATION) / ORBIT_DURATION;
    const angleRad = ((START_ANGLE - progress * 360) * Math.PI) / 180;
    const radiusX = orbit.offsetWidth / 2;
    const radiusY = orbit.offsetHeight / 2;
    const matrix = getOrbitTransform(orbit);

    const localX = Math.cos(angleRad) * radiusX;
    const localY = Math.sin(angleRad) * radiusY;
    const orbitCenterX = orbit.offsetLeft + radiusX;
    const orbitCenterY = orbit.offsetTop + radiusY;

    const orbitX = orbitCenterX + matrix.a * localX + matrix.c * localY + matrix.e;
    const orbitY = orbitCenterY + matrix.b * localX + matrix.d * localY + matrix.f;

    const nagaoCenterX = element.offsetLeft + element.offsetWidth / 2;
    const nagaoCenterY = element.offsetTop + element.offsetHeight / 2;
    const translateX = orbitX - nagaoCenterX;
    const translateY = orbitY - nagaoCenterY;
    const rotationProgress = elapsed / ASTEROID_ROTATION_DURATION;
    const asteroidRotation =
      rotationProgress * 360 +
      Math.sin(rotationProgress * Math.PI * 4) * ASTEROID_WOBBLE_DEGREES;
    const depthScale = getDepthScale(localY, radiusY);

    element.style.opacity = getMaskOpacity(localX, radiusX);
    element.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) rotate(${asteroidRotation}deg) scale(${depthScale})`;

    frameId = requestAnimationFrame(moveNagao);
  };

  element.addEventListener("mouseenter", () => {
    paused = true;
    pausedAt = performance.now();
  })

  element.addEventListener("mouseleave", () => {
    if(!paused) return;

    totalPausedTime += performance.now() - pausedAt;
    paused = false;
  })


  const start = () => {
    frameId = requestAnimationFrame(moveNagao);
  };

  if (element.complete) {
    start();
  } else {
    element.addEventListener("load", start, { once: true });
  }

  return () => {
    cancelAnimationFrame(frameId);
    element.removeEventListener("load", start);
  };
};
