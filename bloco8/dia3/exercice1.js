    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  const arrayOfarrays = arrays.reduce((acc, curr) => acc.concat(curr), [])//[] é o valor inicial do acumulador, nesse caso ele começa vazioe vai concatenando os arrays ao longo do loop
  return arrayOfarrays
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);