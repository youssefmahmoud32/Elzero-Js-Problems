// Priblem:
// Make the function that calculates your age with all time units
// The function accept one Parameter [You age in years].
// You should print your age in monthes, weeks, days, hours, minutes, and sconeds.
// You should every time unit in new line in console.
// You should make sure that the age is less than 10 or greater than 100, if the age is like that proint: "Age Out Of Range"

// Solve:

function ageInTime(theAge) {
  if (theAge > 100 || theAge < 10) {
    console.log("Age Out Of Range");
  } else {
    console.log(`Your age in monthes = ${theAge * 12} Monthes`);
    console.log(`Your age in weeks = ${theAge * 52} Weeks`);
    console.log(`Your age in days = ${theAge * 365.25} Days`);
    console.log(`Your age in hours = ${theAge * 24 * 365.25} Hours`);
    console.log(`Your age in minutes = ${theAge * 60 * 24 * 365.25} Minutes`);
    console.log(`Your age in Scondes = ${theAge * 360 * 24 * 326.25} Scondes`);
  }
}

ageInTime(110); // Age Out Of Range
ageInTime(16);
ageInTime(60);
