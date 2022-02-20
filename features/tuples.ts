const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];

// this array is going to always have a very consistent ordering of elements inside it
const pepsi: [string, boolean, number] = ['brown', true, 40];

const sprite: Drink = ['clear', true, 30];
const tea: Drink = ['brown', false, 0];

// not very useful
const carSpecs: [number, number] = [400, 3354];

// in an object format it is immediately clear what is going on at a glance
const carStats = {
  horsePower: 400,
  weight: 3354,
};
