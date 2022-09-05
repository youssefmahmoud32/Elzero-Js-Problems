// Problem:
// Switch these functions to Arroe functions

// Solve:

// function itsMe() {
//   return `Iam A Normal Function`;
// }

// console.log(itsMe()); // Iam A Normal Function

let arr1 = () => `Iam An Arrow Function`;
console.log(arr1());
// ________________________________________________

// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }

// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

let arr2 = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(arr2("https", "elzero", "org"));
