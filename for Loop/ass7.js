// Problem:
// You cannot use any numbers or chercters but you can use variables value
// You Shuld print numbers from 2 to end and exclude 1 and "A,B,C"
// You Should  use for Loop to solve the problem

// Solve:
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (
  i = (mix.length * mix.length + mix.length) / mix.length - mix.length;
  i < mix.length;
  i++
) {
  // console.log(i);
  if (typeof mix[i] === "string") {
    continue;
  }
  console.log(mix[i]);
}
