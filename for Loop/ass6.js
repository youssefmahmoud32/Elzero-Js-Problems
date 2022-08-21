// Problem:
// You cannot use any numbers or chercters but you can use variables value
// By using loop transper Capial to small and small to capital
// You should use for Loop to solve the problem
//  Output should be:
// "ELzERo"
// Solve:
let start = 0;
let swappedName = "elZerO";
let result = "";
for (i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    result += swappedName[i].toUpperCase();
  } else if (swappedName[i] === swappedName[i].toUpperCase()) {
    result += swappedName[i].toLowerCase();
  }
}
console.log(result);
