/*
const car = { make: 'honda', year: 2000 };

Object.getOwnPropertyDescriptor(car, 'make')
// returns: { value: 'honda', writable: true, enumerable: true, configurable: true }

Object.defineProperty(car, 'make', { writeable: false })
// now the big difference the make property is no longer writeable
*/

@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  // @testDecorator // decorator #1
  // @logError // decorator #2
  // @logError('Oops, boat was sunk in ocean') // decorator #3
  pilot(): void {
    throw new Error();
    console.log('swish');
  }

  // @logError
  drive(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

// // decorator #1
// function testDecorator(target: any, key: string): void {
//   console.log('Target:', target);
//   console.log('Key:', key);
// }
// can be called like a function also
// testDecorator(Boat.prototype, 'pilot');

// // decorator #2
// function logError(target: any, key: string, desc: PropertyDescriptor): void {
//   const method = desc.value;

//   desc.value = function () {
//     try {
//       method();
//     } catch (e) {
//       console.log('Oops, boat was sunk');
//     }
//   };
// }

// new Boat().pilot();

// #5
function testDecorator(target: any, key: string) {
  console.log(key); // cannot get direct access to that property
}

// // decorator #3 -> decorator factory
// function logError(errorMessage: string) {
//   return function (target: any, key: string, desc: PropertyDescriptor): void {
//     const method = desc.value;

//     desc.value = function () {
//       try {
//         method();
//       } catch (e) {
//         console.log(errorMessage);
//       }
//     };
//   };
// }
// new Boat().pilot();
