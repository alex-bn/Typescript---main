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

// 1)
const numbersCollection = new NumbersCollection([
  -99, 0, -4, 9, 4, 8, 2, 3, 100,
]);
//
// before refactoring
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// after refactoring
numbersCollection.sort();
console.log(numbersCollection.data);

// 2)
const characterCollection = new CharactersCollection(
  'XxApOiUHGtdsadasd234234yas'
);

// before refactoring
// const sorter = new Sorter(characterCollection);
// sorter.sort();
// console.log(characterCollection.data);

// after refactoring
characterCollection.sort();
console.log(characterCollection.data);

// 3)
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

// before refactoring
// const sorter = new Sorter(linkedList);
// sorter.sort();
// linkedList.print();

// after refactoring
linkedList.sort();
linkedList.print();
