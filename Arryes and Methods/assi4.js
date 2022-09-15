// Problem:
// You cannot use any nubers, but you can use zero
// You should solve the problem in just one line

// Solve:

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.pop().shift().toUpperCase().slice(website.length)); // ZERO
