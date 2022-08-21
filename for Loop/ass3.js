// Problem:
// You cannot use any numbers but you can use variables value
// You should print numbers like this example:
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4
// You should use for Loop to solve the problem

// Solve:
let start = 1;
let end = 6;
let breaker = 2;

for (i = 1; i <= 6; i++) {
  console.log(i);
  for (j = breaker; j <= breaker + breaker; j += 2) {
    console.log(`-- ${j}`);
  }
}
