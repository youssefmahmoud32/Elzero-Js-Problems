// Problem:
// You hava an array that contains other array.
// Create a new array with reduce.
// You should make flatten to aray to return one array.
// You should make concatenate to letters to appear result.
// You cannot use Array.flat().

// Solve

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArray = myArray
  .reduce(function (acc, current, index) {
    return acc + current;
  })
  .split("")
  .filter(function (e) {
    return e !== ",";
  })
  .join("");
console.log(newArray);
