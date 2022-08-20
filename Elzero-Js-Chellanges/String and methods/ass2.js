// Problem:
// Use vars to know that (Z) is in word (in first line). and output = true
// That the word starts with (E), and output = true (in second line).
// That the word ends with (o), and output = true (in third line).
// Capital and small are important.
// You cannot change any variable.

// Solve:
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True
