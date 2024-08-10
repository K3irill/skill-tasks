"use strict";

// ^_^    task 1

// let userNum = +prompt("Please, enter your number.");

// if (!isNaN(userNum)) {
//   if (userNum % 2 === 0) {
//     console.log("Your number is even");
//   } else console.log("Your number is odd");
// } else console.log(`Uppsss, you entered not a number`);
//------------------------------------------------------

function factorial(val) {
  if (val == 0) {
    return 1;
  } else return val * factorial(val - 1);
}
console.log(factorial(1));

let arr = [1, , 2, 3, 4, 4, 5];
arr[1] = [true, false, "fasfa"];
console.log(arr);

//------------------------------------------------------

var argumentsLength = function (...args) {
  return args.length;
};
console.log(argumentsLength(1, 2, "gsg", 5, true));

//------------------------------------------------------

var scoreOfString = function (s) {
  let result = 0;
  for (let i = 0; i < s.length - 1; i++) {
    result += Math.abs(s[i].charCodeAt(0) - s[i + 1].charCodeAt(0));
  }
  return result;
};

console.log(scoreOfString("hello"));

function whatday(num) {
  const ARR = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return ARR[num - 1] || "Wrong, please enter a number between 1 and 7";
}
// let result = '';
//     if (num === 1) {
//       result = ARR[0];
//       return console.log(ARR[0]);
//     } else if (num === 2) {
//       return console.log(ARR[1]);
//     } else if (num === 3) {
//       return console.log(ARR[2]);
//     } else if (num === 4) {
//       return console.log(ARR[3]);
//     } else if (num === 5) {
//       return console.log(ARR[4]);
//     } else if (num === 6) {
//       return console.log(ARR[5]);
//     } else if (num === 7) {
//       return console.log(ARR[6]);
//     } else return console.log("Wrong, please enter a number between 1 and 7");
//   }

console.log(whatday(0));


