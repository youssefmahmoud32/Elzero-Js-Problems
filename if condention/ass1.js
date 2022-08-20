// Problem:
// By using the variable do the next steps:
// if num is less than 10 print the number with 00 before it
// if num is greater than 10 and less than 100 print the num with 0 before it
// if num is greater than or equal 100 print number without zeros

// Solve:

const num = 105;

if (num < 10) {
  console.log("00" + num);
} else if (num > 10 && num < 100) {
  console.log("0" + num);
} else {
  console.log(num.toString());
}
