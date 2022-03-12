// not needed at this point
interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

// quick friendly reminder
// Interfaces:
// Sets up a contract between different classes
// Use when we have very different object that we want to ork together
// Promotes loose coupling

// Inheritance/Abstract classes:
// Sets up a contract between different classes
// Use when we a re trying to build up a definition of an object
// Strongly couples classes together

export abstract class Sorter {
  abstract length: number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
