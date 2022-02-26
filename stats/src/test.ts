// 1) silly thing to do:
const addOne = (a: number): number => {
  return a + 1;
};

const addTwo = (a: number): number => {
  return a + 2;
};

const addThree = (a: number): number => {
  return a + 3;
};

// 2) generic function:
const add = (a: number, b: number) => {
  return a + b;
};
// when we make use of function arguments we customize how the function behaves when we actually make use of it
add(1, 2);
add(10, 20);
add(14, 22);

// 3) Generics

// a) silly thing to do:
class HoldNumber {
  declare data: number;
}
const holdNumber = new HoldNumber();
holdNumber.data = 123;

class HoldString {
  declare data: string;
}
const holdString = new HoldString();
holdString.data = 'abc';

// b) generics:
class HoldAnything<T> {
  declare data: T;

  add(a: T): T {
    return a;
  }
}

const holdANumber = new HoldAnything<number>();
holdANumber.data = 123;
holdANumber.add(10);

const holdAString = new HoldAnything<string>();
holdAString.data = 'abc';
