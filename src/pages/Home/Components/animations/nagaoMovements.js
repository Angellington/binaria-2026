// nagaoMovements.js

export const startNagaoMovement = (element) => {
  if (!element) return;

  const playAnimation1 = () => {
    element.animate(
      [
        {
          opacity: 0,
          transform: "translate(-15px, 0px) rotate(0deg)",
        },

        {
          opacity: 1,
          offset: 0.05,
        },

        {
          opacity: 1,
          transform: "translate(75px, 119px) rotate(15deg)",
          offset: 0.5,
        },

        {
          opacity: 0,
          transform: "translate(320px, 210px) rotate(-55deg)",
        },
      ],
      {
        duration: 8000,
        easing: "linear",
        fill: "forwards",
      }
    ).finished.then(playAnimation2);
  };

  const playAnimation2 = () => {
    element.animate(
      [
        {
          opacity: 1,
          transform: "translate(320px, 210px) rotate(-55deg)",
        },

        {
          opacity: 1,
          transform: "translate(150px, 80px) rotate(-15deg)",
          offset: 0.5,
        },

        {
          opacity: 1,
          transform: "translate(-15px, 0px) rotate(0deg)",
        },
      ],
      {
        duration: 6000,
        easing: "ease-out",
        fill: "forwards",
      }
    ).finished.then(playAnimation1);
  };

  playAnimation1();
};