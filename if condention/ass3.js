// You have 3 variables use thin to print output with one If Condition
// in first line make sure that num3 > num1 and num3 != num2 in his type
// In sconed line make sure that num3 > num1 and num3 = num2 in his value but not in hsi type
// In third line make sure that num3 != num1 in value and type, and num3 != num2 in his type
// Needed Output
// "30 Is Larger Than 10 And Type string Not The Same Type As number"
// "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
// "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

// Solve:
let num1 = 10;
let num2 = 30;
let num3 = "30";

if (
  num3 > num1 &&
  num3 !== num2 &&
  num3 > num1 &&
  num3 == num2 &&
  num3 != num1 &&
  num3 !== num2
) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number \n30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number \n{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
  );
}
