// Problem:
// You have 3 variables use them to make the next steps:
// print "{num1} Is The Same Value As {str}" if value of num1 = value of str
// print "{num1} Is The Same Value As {str} But Not The Same Type" if they have the same value but not the same type
// print "{num1} Is Not The Same Value Or The Same Type As {str2}" if num 1 != str2 in value and type
// print "{str} Is The Same Type As {str2} But Not The Same Value" if str = str2 in type

// Solve:
let num1 = 9;
let str = "9";
let str2 = "20";

if (num1 == str) {
  console.log(`{num1} Is The Same Value As {str}`);
}
if (num1 !== str) {
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}
if (num1 != str2) {
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}
if (str != str2 && typeof str == typeof str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}
