// // Bubble Sort -> a double nested >for-loop< that is going to iterate through our collection several times

// class SorterOld {
//   constructor(public collection: number[] | string) {}
//   sort(): void {
//     const { length } = this.collection;

//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - i - 1; j++) {
//         // logic for a collection of numbers
//         if (this.collection instanceof Array) {
//           if (this.collection[j] > this.collection[j + 1]) {
//             const leftHand = this.collection[j];
//             this.collection[j] = this.collection[j + 1];
//             this.collection[j + 1] = leftHand;
//           }
//         }

//         // logic for a collection of letters
//         if (typeof this.collection === 'string') {
//           if (
//             this.collection[j].toLowerCase() >
//             this.collection[j + 1].toLowerCase()
//           ) {
//             const characters = this.collection.split('');

//             const leftHand = characters[j];
//             characters[j] = characters[j + 1];
//             characters[j + 1] = leftHand;

//             this.collection = characters.join('');
//           }
//         }

//         // another logic for another type of array
//       }
//     }
//   }
// }

// const numbers = new SorterOld([1, -1, 10, 3, 9, 5]);
// numbers.sort();
// console.log(numbers);

// const string = new SorterOld('ACBcba');
// string.sort();
// console.log(string);

import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([100, 1, 8, -1, 0, 4]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
console.log(linkedList.length);

// const sorter = new Sorter(linkedList);
linkedList.sort();
linkedList.print();
