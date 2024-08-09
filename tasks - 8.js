'use strict'

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
