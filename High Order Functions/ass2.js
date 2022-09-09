// Problem:
// You have a string that contains Letetrs some of them is reapeted and some is no.
// Create a new array by using filter.
// You should exept repeated leters from result.
// You should make a concatenate to letters in the final result.

// Solve:

let myString = "EElllzzzzzzzeroo";

let ignoringRepeation = myString
  .split("")
  .filter(function (ele, index) {
    return myString.indexOf(ele) === index;
  })
  .join("");

console.log(ignoringRepeation);
