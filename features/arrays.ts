// explicit type annotation
const carMakers: string[] = ['ford', 'toyota', 'chevy'];

// type annotations at initialization
const carMakers1: string[] = [];

//
const dates = [new Date(), new Date()];

//
const carsByMake = [['f150'], ['corolla'], ['camaro']];
const carsByMake1: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100); // Argument of type 'number' is not assignable to parameter of type 'string'.

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types

const importantDates: (Date | string)[] = [];
importantDates.push('2020-09-09');
importantDates.push(new Date());
