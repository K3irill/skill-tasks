'use strict'

//------------SSTTAARRTT-----------------------------------------------------------------------------

// ^_^    task 1

// let userNum = +prompt('Please, enter your number.');

// if (!isNaN(userNum)){
//     if(userNum % 2 === 0 ){
//         console.log('Your number is even');
//     }else console.log('Your number is odd')
// }else console.log(`Uppsss, you entered not a number`);

// ᓚᘏᗢ    task 2

let value;

if(typeof value === 'number' && value !== null){
  console.log(`${value} - is number`);
}else if(typeof value === 'string'){
  console.log(`${value} - is string`);
}else if(typeof value === 'boolean'){
  console.log(`${value} - is boolean`);
}else console.log(` Type of '${value}' is not defined`);

// ಠ_ಠ    task 3

let str1 = 'Hello';
let reverseStr = str1.split('').reverse().join('');
console.log(reverseStr);

// (^///^)    task 4

let randomNum =  Math.round(Math.random(0, 100) * 100) ;

console.log(randomNum);

// ( ´･･)ﾉ(._.`)    task 5

let myArray = [101, null, 'honk', 'redhat', true];

console.log(myArray.length);
myArray.forEach((value) => console.log(`with 'forEach': ${value}`));

console.log('😜😜😜')

for(let i = 0; i <= myArray.length; i++){
  console.log(`with 'for': ${myArray[i]}`);
}

// (☞ﾟヮﾟ)☞    task 6

let array = ['skill', 'skill', 'skill', 12, 'skill'];

let result2 = true;
for(let i = 0; i < array.length; i++){
  for(let y = i + 1; y < array.length; y++){
      if (typeof(array[i]) !== typeof(array[y])){
        result2 = false;
      } 
  }
}
console.log(result2);

// (•_•)    task 7

let evenNumArray = ["null", null, 1, 2, 0, 55, 12, 36, 99, 89, 0, 72];

let countEven = 0;
let countOdd = 0;
let countZeros = 0;
for(let i = 0; i < evenNumArray.length; i++){
  if(evenNumArray[i] !== null && evenNumArray[i] % 2 === 0 && evenNumArray[i] !==0){
    countEven += 1
  }else if(evenNumArray[i] % 2 !== 0 && typeof evenNumArray[i] !== 'string'){
    countOdd += 1
  }else if(evenNumArray[i] == 0){
    countZeros += 1;
  }
}
console.log(countEven)
console.log(countOdd)
console.log(countZeros)

//                       (¬_¬ )
// let countEven = 0;
//     let countOdd = 0;
//     let countOther = 0;

//     for (let i = 0; i < arr.length; i++){
//         if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
//             countOther++;
//         } else {
//             if (arr[i] % 2 === 0) {
//                 countEven++;
//             } else {
//                 countOdd++;
//             }
//         }
//     }

// ╰(*°▽°*)╯    task 8

let skillMap = new Map([

  ['name', 'John'],

  ['age', '18'],

  ['height', '178cm'],

  ['weight', '75kg'],

  ['foot-size', '40']
]);
for (let values of skillMap.values()){
  for (let keys of skillMap.keys()){
    console.log(`Key - ${keys}, value - ${values} `);
  }
}

//-------------EENNDD--------------------------------------------------------------------------
