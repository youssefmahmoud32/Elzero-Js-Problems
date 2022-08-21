// Problem:
// You cannot use any numbers but you can use variables value
// You should print the numbers and stop printing when numers = 3
// If number > 10, Print 0 before it
// You should use for Loop to solve the problem

// Solve:
let start = 10;
let end = 0;
let stop = 3;
for (i = start; i >= stop; --i) {
  // console.log(start);
  if (i < start) {
    console.log("0" + i);
  } else {
    console.log(i);
  }
}
