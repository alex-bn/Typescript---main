"use strict";
// // bubble sort algorithm
// class Sorter {
//   constructor(public collection: number[] | string) {}
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
// 1)
const numbersCollection = new NumbersCollection_1.NumbersCollection([
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
const characterCollection = new CharactersCollection_1.CharactersCollection('XxApOiUHGtdsadasd234234yas');
// before refactoring
// const sorter = new Sorter(characterCollection);
// sorter.sort();
// console.log(characterCollection.data);
// after refactoring
characterCollection.sort();
console.log(characterCollection.data);
// 3)
const linkedList = new LinkedList_1.LinkedList();
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
