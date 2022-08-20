// problem:
// You cannot use any numbers but tou can use variable
// You should solve the problem in 2 differnt ways

// Solve:

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.splice(num);
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 3
myFriends.length = num;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
