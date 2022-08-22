// Problem:
// Make the functiton that make Different calculations
// The function just accept 3 Parameters: firstNum, secondNum, operation
// The function makes Operations that you write in the 2 nums and it contaiens 3 operations: ( add | subtract | multiply )
// If there are no operations, Add num1 to num2
// If there are just one number in the function appear the mesasge that containes[The Sconed number is not found]
// Needed Output
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, 'add'); // 50
// calculate(20, 30, 'subtract'); // -10
// calculate(20, 30, 'multiply'); // 600

// Solve:

function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    console.log("Second Number Not Found");
  } else if (operation === undefined || operation === "add") {
    console.log(firstNum + secondNum);
  } else if (operation === "subtract") {
    console.log(firstNum - secondNum);
  } else {
    console.log(firstNum * secondNum);
  }
}

calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
