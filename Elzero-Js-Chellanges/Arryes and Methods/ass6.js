// Problem:
// You cannot use any numbers

// Solve:

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs =
  arr2[2].toLocaleLowerCase() +
  arr1[2].toLocaleLowerCase() +
  arr2[3].toLocaleLowerCase();
console.log(allArrs); // fxy
