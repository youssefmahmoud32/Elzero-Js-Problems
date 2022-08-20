// Problem: Use the variable to solve the problem in 5 differnent ways
// You can use Boolean Values
// You cannot use any varibles
// Solve:

let num = "10";

// Solution One
console.log(+num + +num++); // 20

// Solution Two
console.log(num-- + --num); // 20

// Solution Three
console.log(--num + --num + --num - true); // 20

// Solution Four
console.log(--num * --num); // 20

console.log(++num * num - num); // 20
