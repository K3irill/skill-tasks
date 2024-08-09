'use strict'

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
