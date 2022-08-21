// Problem:
// You cannot use any numbers

// Solve:

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs =
  arr2[(arr1.length + arr1.length) / arr1.length].toLocaleLowerCase() +
  arr1[(arr2.length + arr2.length) / arr2.length].toLocaleLowerCase() +
  arr2[arr1.length].toLocaleLowerCase();
console.log(allArrs); // fxy
