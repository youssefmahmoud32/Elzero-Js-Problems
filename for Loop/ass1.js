// Problem:
// You cannot use any numbers but you can use varibles value to solve the problem
// You should print numbers and expet 40
// You should use for loop to solve the problem

// Solve:
let start = 10;
let end = 100;
let exclude = 40;

for (i = start; i <= end; i += start) {
  if (i == exclude) {
    continue;
  }
  console.log(i);
}
