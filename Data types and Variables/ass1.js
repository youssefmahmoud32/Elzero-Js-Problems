// Problem:
// Add Variables Here

// Ouput
// console.log("Add Code Here"); // Normal Concatenate => 1020
// console.log("Add Code Here"); // Normal Concatenate => String
// console.log("Add Code Here"); // Template Literals Way => 1020
// console.log("Add Code Here"); // Template Literals Way => String

// console.log("Add Code Here");
/*
  Normal Concatenate
  20
  10
*/

// console.log("Add Code Here");
/*
  Template Literals Way
  20
  10
*/

// Solve

let numOne = 10;
let numTwo = 20;
let concatenate1 = numOne + "" + numTwo;
let concatenate2 = `${numOne}${numTwo}`;

console.log(concatenate1); // output ==> 1020
console.log(typeof concatenate1); // Output ==> String
console.log(concatenate2); //output ==> 1020
console.log(typeof concatenate2); // Output ==> String
console.log(numTwo + "" + "\n" + numOne);
/*
Output ==>
with Normal Concatenate
20
10
*/
console.log(`${numTwo}\n${numOne}`);
/*
Output ==>
with Template Literals Way
20
10
*/
