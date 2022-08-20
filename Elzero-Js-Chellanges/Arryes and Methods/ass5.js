// Problem:
// You Should make shure that value of needle variable in the array
// You should solve the problem in diffrent 3 ways
// Print [found] if the word in the array

// Solve:
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.includes(needle)) {
  console.log("Found");
}
if (haystack.indexOf(needle)) {
  console.log("Found");
}
if (haystack.lastIndexOf(needle)) {
  console.log("Found");
}
if (needle === haystack[1]) {
  console.log("Found");
}
