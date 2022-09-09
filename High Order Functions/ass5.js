// Problrm:
// You hava a var that contains Group of even and odd numbers.
// Find the final result by using reduce (just reduce).
// You must set the Initial Value to number 1.
// if the value of current ele in reduce is odd num, Add acc + current.
// if the value of current ele in reduce is even, Multiply acc, current.

// Solve:

let nums = [2, 12, 11, 5, 10, 1, 99];

let newNums = nums.reduce(function (acc, current) {
  if (current % 2 === 1) {
    return acc + current;
  }
  if (current % 2 === 0) {
    return acc * current;
  }
}, 1);

console.log(newNums);
