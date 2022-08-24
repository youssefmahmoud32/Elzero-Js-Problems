// Problem:
// Create a function that multiplies all the numbers you pass to it by some of them.
// the number of parmeters is unknown.
// If the argument used in the Function is a string, do not use it with numbers.
// If the Argument is a Float, convert it to Integer before the multiplication process begins.

// Solve:

function multiply(...nums) {
  result = 0;
  for (i = 0; i < nums.length; i++) {
    if (typeof nums[i] === "string") {
      continue;
    } else {
      result = parseInt(nums[i - 1]) * parseInt(nums[i]);
    }
  }
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 11, "B"); // 1000
