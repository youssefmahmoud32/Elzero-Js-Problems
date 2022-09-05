// Problem:
// Create a function with "getDetails" name that accpet 3 parameters: [zAge, zCountry,zName].
// The main function contains 4 minor functions: [ ageWithMessage, countryTwoLetters, fullDetails, namePattern].
// namePattern accpett the name from 2 sections like Osama Moamed and retuvn it like Osama M.
// ageWithMessage accept message contains age.
// countryTwoLetters assept message that contains country name and return message contains the first 2 ketetrs from the name.
// fullDetails conactenate all functions that you make to print: // Hello Osama M., Your Age Is 38, You Live In EG
// Person sconed name: first letter is capital or small
// Age message can be changed but the num should be in the intro.

// Solve:

function getDetails(zName, zAge, zCountry) {
  function namePattern() {
    return `${zName.slice(0, zName.indexOf(" "))}${zName
      .substr(zName.indexOf(" "), 2)
      .toUpperCase()}.,`;

    // Write Your Code Here
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  namePattern();

  function ageWithMessage() {
    return ` Your Age Is ${parseInt(zAge)},`;
    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  ageWithMessage();

  function countryTwoLetters() {
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  countryTwoLetters();

  function fullDetails() {
    // Write Your Code Here
    return `Hello ${namePattern()}${ageWithMessage()}${countryTwoLetters()}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
