// # Type annotations for functions:
// > code we add to tell TS what type of arguments a function will receive and what type of vales it will return
// # Type inference for functions:
// > type inference only works around the return value of a function

// arrow function
const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

// named function
function divide(a: number, b: number): number {
  return a / b;
}

// anonymous function assigned to a variable
const multiply = function (a: number, b: number): number {
  return a * b;
};

// void -> a function that is going to not return anything
const logger = (message: string): void => {
  console.log(message);

  // return null; // can return null or undefined
  // return undefined;
};

// never -> that means that we are never going to reach the end of this function
const throwError = (message: string): never => {
  throw new Error(message);
};

//
const module = (a: number, b: number) => {
  if (typeof a != 'number' || typeof b !== 'number') {
    invalidArgumentError();
  }
  return a % b;
};
// never
const invalidArgumentError = (): never => {
  throw new Error('Invalid argument provided. Expected a number');
};

//
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

// ES2015 destructuring
const logWeather1 = ({ date, weather }) => {
  console.log(date);
  console.log(weather);
};

// destructuring with a TS annotation:
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
