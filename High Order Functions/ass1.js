// Problem:
// You have a variable that contains Letters And Number.
// Create a new array by using map.
// You should expet all numbers from result.
// You should make concatenate to letters to appear a result.
// You should use map + reduce with what you learn to solve the problem.
// You must not use filter or join.

// Solve:

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let newMixArray = mix
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });

console.log(newMixArray);

// Elzero
