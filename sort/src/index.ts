// // bubble sort algorithm
// class Sorter {
//   constructor(public collection: number[] | string) {}

//   // // 1st version -> sorting an array of numbers
//   // sort(): void {
//   //   const { length } = this.collection;
//   //   for (let i = 0; i < length; i++) {
//   //     for (let j = 0; j < length - i - 1; j++) {
//   //       if (this.collection[j] > this.collection[j + 1]) {
//   //         const leftHand = this.collection[j];
//   //         this.collection[j] = this.collection[j + 1];
//   //         this.collection[j + 1] = leftHand;
//   //       }
//   //     }
//   //   }
//   // }

//   // 2nd version -> sorting an array of numbers and sorting a string
//   sort2(): void {
//     const { length } = this.collection;
//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - i - 1; j++) {
//         // If collection is a number[], do this logic:
//         if (this.collection instanceof Array) {
//           // collection === number[] -> type-guard to lift the restriction imposed by the union operator
//           if (this.collection[j] > this.collection[j + 1]) {
//             const leftHand = this.collection[j];
//             this.collection[j] = this.collection[j + 1];
//             this.collection[j + 1] = leftHand;
//           }
//         }

//         // If collection is a string, do this logic:
//         if (typeof this.collection === 'string') {
//           // collection === 'string' -> type-guard to restore access to a set of properties in a union type
//           // logic
//         }
//       }
//     }
//   }
// }

//
import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([
//   -99, 0, -4, 9, 4, 8, 2, 3, 100,
// ]);

// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const characterCollection = new CharactersCollection(
//   'XxApOiUHGtdsadasd234234yas'
// );
// const sorter = new Sorter(characterCollection);
// console.log(`Before sorting: ${characterCollection.data}`);
// sorter.sort();
// console.log(`After sorting: ${characterCollection.data}`);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

console.log(typeof linkedList);
console.log(linkedList);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
