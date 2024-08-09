'use strict'

// ( ´･･)ﾉ(._.`)    task 5

let myArray = [101, null, 'honk', 'redhat', true];

console.log(myArray.length);
myArray.forEach((value) => console.log(`with 'forEach': ${value}`));

console.log('😜😜😜')

for(let i = 0; i <= myArray.length; i++){
  console.log(`with 'for': ${myArray[i]}`);
}
