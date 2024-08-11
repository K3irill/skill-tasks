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

let obj = {
  name: "kail",
  age: 18,
};

delete obj.age;

console.log(obj.name);
let fruit = "banana";

let bag = {
  [fruit]: null,
  age: 14,
  name: "kriper",
};
bag[fruit] = 15;

console.log(bag[fruit]);

console.log("banana" in bag);

for (let i in bag) {
  console.log(i, bag[i]);
}

let schedule = {
  name: 21,
};

function isEmpty(obj) {
  let result = true;
  for (let i in obj) {
    if (obj[i] == undefined) {
    } else result = false;
  }
  return result;
}
console.log(isEmpty(schedule));

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(object) {
  for (let i in object) {
    if (typeof object[i] === "number") {
      object[i] *= 2;
    }
  }
}
multiplyNumeric(menu);
console.log(menu);

// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu",
// };



//-------------------Leetcode----------------------------------------------------------

var createCounter = function (n) {
  return function () {
    return ++n;
  };
};
console.log(createCounter(10));


var expect = function (val) {
  let obj = {
    toBe: function (val) {
      if (val === val && val !== null) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (val) {
      if (val === null) {
        return true;
      }
    },
  };
  return obj;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
