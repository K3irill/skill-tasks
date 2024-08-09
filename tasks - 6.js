'use strict'

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
