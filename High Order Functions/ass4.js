// Problem:
// You have a var that  contains  Letters And Numbers
// Create a new array by using map + filter.
// You should expet letters from result.
// You should reverse nubers from neg to pos or from pos to neg.
// You should map + filter + what you want.

// Solve:

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let reversedNumbers = numsAndStrings
  .filter(function (e) {
    return !isNaN(parseInt(e));
  })
  .map(function (ele) {
    return -ele;
  });

console.log(reversedNumbers);

// [-1, -10, 10, 20, -5, -3]
