"use strict";

// ^_^    task 1

let userNum = +prompt("Please, enter your number.");

if (!isNaN(userNum)) {
  if (userNum % 2 === 0) {
    console.log("Your number is even");
  } else console.log("Your number is odd");
} else console.log(`Uppsss, you entered not a number`);
