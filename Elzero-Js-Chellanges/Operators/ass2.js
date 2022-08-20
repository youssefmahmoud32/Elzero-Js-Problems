// Problem: Use the variable to solve the problem in 5 differnent ways
// You can use Boolean Values
// You cannot use any varibles
// Solve:

let num = 3;

// Solution One
console.log(num + num); // 6
// Solution Two
console.log(num * --num); // 6

// Soultion Three
console.log(num ** num + num++); // 6

// Soultion Four
console.log(num - --num + 5 * true); // 6

// Solution Five
console.log(num++ * num++); // 6

// Solution Six
console.log((++num % --num) + ++num); // 6
