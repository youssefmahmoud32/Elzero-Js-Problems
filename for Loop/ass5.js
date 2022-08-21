// Problem:
// You cannot use any numbers but you can use variables value
// You should print numbers like this exampleو, and put the name with number in dynamic way:
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"
// Exclude names that starts with "A"
// You should use for Loop to solve the problem

// Solve:
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (i = letter.length - letter.length; i < friends.length; i++) {
  // console.log(i);
  if (friends[i].startsWith(letter.toUpperCase())) {
    continue;
  }
  console.log(`${i} => ${friends[i]}`);
}
