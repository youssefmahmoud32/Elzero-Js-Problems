// Problem:
// You cannot use any numbers but you can use variables value
// You should print numbers like this example:
// 10
// 8
// 6
// 4
// Write you code in the loop and do not edit any thing again
// You should use for Loop to solve the problem

// Solve:
let index = 10;
let jump = 2;
let end = 0;
let i = index;
for (;;) {
  console.log(i);
  i -= jump;
  if (i == jump) {
    break;
  }
}
