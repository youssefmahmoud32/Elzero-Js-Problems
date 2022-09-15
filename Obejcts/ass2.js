// Problem:
// Create a new obejct in 4 differnt ways.

// Solve:

// Method One
// Create Your Object Here

let objMethodOne = {
  property: "Method One",
};
console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here

let objMethodTwo = new Object({
  property: "Method Two",
});

console.log(objMethodTwo.property); // "Method Two"

// Method Three
// create your object Here

let objMethodThree = Object.create({});
objMethodThree.property = "Method Three";
console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = Object.assign({}, { property: "Method Four" });
console.log(objMethodFour.property); // "Method Four"
