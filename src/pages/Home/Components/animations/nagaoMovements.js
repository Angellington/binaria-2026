// nagaoMovements.js

export const startNagaoMovement = (element) => {
  if (!element) return;

  const playAnimation1 = () => {
    element
      .animate(
        [
          {
            opacity: 1,
            transform: "translate(-15px, 0px) rotate(10deg) scale(1)",
            offset: 0,
          },

          {
            opacity: 1,
            transform: "translate(15px, 40px) rotate(14deg) scale(1)",
            offset: 0.15,
          },

          {
            opacity: 1,
            transform: "translate(45px, 80px) rotate(18deg) scale(1)",
            offset: 0.3,
          },

          {
            opacity: 1,
            transform: "translate(75px, 119px) rotate(22deg) scale(1.075)",
            offset: 0.45,
          },

          {
            opacity: 1,
            transform: "translate(105px, 140px) rotate(26deg) scale(1.110)",
            offset: 0.6,
          },

          {
            opacity: 1,
            transform: "translate(145px, 165px) rotate(30deg) scale(1.155)",
            offset: 0.75,
          },

          {
            opacity: 0.8,
            transform: "translate(185px, 175px) rotate(34deg)",
            offset: 0.9,
          },
          {
            opacity: 0.5,
            offset: 0.95,
          },

          {
            opacity: 0,
            transform: "translate(200px, 175px) rotate(38deg) scale(1.170)",
            offset: 1,
          },
        ],
        {
          duration: 2000,
          easing: "linear",
          fill: "forwards",
          // iterations: Infinity,
        },
      )
      .finished.then(() => playAnimation2());
  };

  const playAnimation2 = () => {
    element
      .animate(
        [
          {
            opacity: 0,
            transform: "translate(225px, -20px) rotate(-45deg) scale(0.85)",
            offset: 0,
          },

          {
            opacity: 0.4,
            transform: "translate(190px, -18px) rotate(-35deg) scale(0.88)",
            offset: 0.15,
          },

          {
            opacity: 1,
            transform: "translate(155px, -16px) rotate(-25deg) scale(0.91)",
            offset: 0.3,
          },

          {
            opacity: 1,
            transform: "translate(120px, -14px) rotate(-15deg) scale(0.94)",
            offset: 0.45,
          },

          {
            opacity: 1,
            transform: "translate(85px, -12px) rotate(-5deg) scale(0.97)",
            offset: 0.6,
          },

          {
            opacity: 1,
            transform: "translate(50px, -8px) rotate(0deg) scale(0.99)",
            offset: 0.75,
          },

          {
            opacity: 1,
            transform: "translate(15px, -4px) rotate(5deg) scale(1)",
            offset: 0.9,
          },

          {
            opacity: 1,
            transform: "translate(-15px, 0px) rotate(10deg) scale(1)",
            offset: 1,
          },
        ],
        {
          duration: 2000,
          // easing: "ease-out",
          fill: "forwards",
        },
      )
      .finished.then(playAnimation1);
  };

  playAnimation1();
};
