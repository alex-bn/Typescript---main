//
// Example of GENERICS with classes
class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

// making use of generics:
class ArrayOFAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}
// calling the generic class
new ArrayOFAnything(['a', 'b', 'c']);

// type inference applies to generics as well
const arr = new ArrayOFAnything(['a', 'b', 'c']);

//
// Example of GENERICS with functions
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// making use of generics
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// calling the generic function
printAnything<string>(['a', 'b', 'c']);

// functions also make use of type inference
printAnything(['a', 'b', 'c']);

//
// GENERIC Constraints -> limiting the types of a generic

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

// printHousesOrCars([1, 2, 3, 4]); // Type 'number' is not assignable to type 'Printable'

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
