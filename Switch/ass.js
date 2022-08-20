// Problem: You have a variable includes [day] by switch appear a message for user Depending on the day that he choosed
// You should that the day do not have any spaces before and after it and the first lettet is capital.
// if the var = friday or saturk appear that there are no any dates avilable
// if the var = mon or thurs the dates between 10 am and 5 pm
// if the var = tues, the dates between 10 am to 6 pm
// if the var = wednes, the dates between 10 am and 7 pm
// if the var = wrong day, appear the message tells that is wrong day

//  Solve

let day = "   friday  ";
day = day.trim();
day = day.charAt(0).toUpperCase() + day.slice(1);

switch (day) {
  case "saturday":
  case "Friday":
    console.log("There are no dates avilable");
    break;
  case "monday":
  case "thursday":
    console.log("The dates is from 10am to 5pm");
    break;
  case "Tuesday":
    console.log("The dates is between 10am to 6pm");
    break;
  case "Wednesday":
    console.log("The dates is from 10am to 7pm");
    break;
  default:
    console.log("It a wrong day");
}
