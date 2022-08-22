// Problem:
// You cannot use any numbers but you can use variables value to solve the problem
//  You should not print numbers and names that starts with "A"
// You should use while Loop to solve the problem
// Output should be:
// "1 => Sayed"
// "2 => Mahmoud"

// Solve:
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
  if (typeof friends[index] === "number" || friends[index].startsWith("A")) {
    index++;
    continue;
  }
  console.log(`${++counter} => ${friends[index]}`);
  index++;
}
