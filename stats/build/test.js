"use strict";
// 1) silly thing to do:
const addOne = (a) => {
    return a + 1;
};
const addTwo = (a) => {
    return a + 2;
};
const addThree = (a) => {
    return a + 3;
};
// 2) generic function:
const add = (a, b) => {
    return a + b;
};
// when we make use of function arguments we customize how the function behaves when we actually make use of it
add(1, 2);
add(10, 20);
add(14, 22);
// 3) Generics
// a) silly thing to do:
class HoldNumber {
}
const holdNumber = new HoldNumber();
holdNumber.data = 123;
class HoldString {
}
const holdString = new HoldString();
holdString.data = 'abc';
// b) generics:
class HoldAnything {
    add(a) {
        return a;
    }
}
const holdANumber = new HoldAnything();
holdANumber.data = 123;
holdANumber.add(10);
const holdAString = new HoldAnything();
holdAString.data = 'abc';
