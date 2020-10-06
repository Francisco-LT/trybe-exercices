const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const expected = myRemove([1, 2, 3, 4], 3);


assert.strictEqual(typeof myRemove, 'function');
assert.deepStrictEqual(expected, [1, 2, 4], 'esse array não é o esperado')
assert.notEqual(expected, [1, 2, 4], 'esse array não é o esperado')
assert.notDeepStrictEqual(expected, [1, 2, 3, 4]);