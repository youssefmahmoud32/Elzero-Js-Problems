// Problem:
// Make the function that prints the name, age, if he is free to wrok of no of user.
// The function accept 3 parameters (name, age, status) and his names (a, b, c).
// Data types will be string for name, number for age, boolean for status.
// Data will be used in messy  way inside the function with parecular arrangement.
// Data is not arrangement and do not hava particular name, and you should print the message according to the types of data to be logical message.
// Status can be true or false, and accordint it the message changes.

// Solve:
function checkStatus(a, b, c) {
  let name;
  let age;
  let status;
  if (typeof a === "string") {
    name = a;
  } else if (typeof a === "number") {
    age = a;
  } else {
    status = a;
  }
  if (typeof b === "string") {
    name = b;
  } else if (typeof b === "number") {
    age = b;
  } else {
    status = b;
  }
  if (typeof c === "string") {
    name = c;
  } else if (typeof c === "number") {
    age = c;
  } else {
    status = c;
  }
  if (status === true) {
    status = "You are avilable to hire";
  } else {
    status = "You are not avilable to hire";
  }
  console.log(`Hello ${name}, Your Age Is ${age}, ${status}`);
}

checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
