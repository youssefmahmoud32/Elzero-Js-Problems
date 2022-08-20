// Problem
// Replace ? With Arithmetic Operators to appear 0 in Output
// console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400); // 0

// Solve
console.log((((10 * 20 * 15) % 3) * 190) / 10 / 400);
