// Problem:
// Create a function with "specialMix" name and accpet unknown number of parmeters.
// Functin can accept numbers, strings and strings contians numers in the begining of it.
// If all of Arguments are numbers, make an aadetion operation.
// If they are strings contians numbers pick the numbers from it and print all of them, and exept all pure string.
// If they are pure strings, print: "All is string".

// Solve:

function specialMix(...data) {
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    if (isNaN(parseInt(data[i])) === false) {
      result += parseInt(data[i]);
    }
  }
  if (result === 0) {
    return "All Is Strings";
  }
  return result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

// function specialMix(...data) {
//   // Your Code Here
//   let result = 0;
//   for (let i = 0; i < data.length; i++) {
//     if (isNaN(parseInt(data[i])) === false) {
//       result += parseInt(data[i]);
//     }
//   }
//   if (result === 0) {
//     return `All Is Strings`;
//   }
//   return result;
// }

// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
