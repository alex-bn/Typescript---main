// not a good pattern of favoring composition over inheritance. this is called multiple inheritance where you're copy/paste-ing the methods and from openable and rectangle down to rectangleWindow.

const rectangular = () => {
  return {
    area: () => {
      return state.height * state.width;
    },
  };
};

const openable = state => {
  return {
    toggleOpen: () => {
      state.open = !state.open;
    },

    area: () => {}, // as soon as you add a method with a similar name you see the fragility of the pattern
  };
};

const buildRectangleWindow = state => {
  return Object.assign(state, rectangular(state), openable(state));
};

const rectangleWindow = buildRectangleWindow({
  height: 20,
  width: 20,
  open: false,
});

console.log(rectangleWindow.open);
rectangleWindow.toggleOpen();
console.log(rectangleWindow.open);
