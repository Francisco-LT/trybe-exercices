const assert = require('assert');

const arr1 = [1, 2, 3, 4, 20, 100];
const arr2 = [1, 2, 3, 4, 20, 101];

assert.deepEqual(arr1, arr2, 'deepEqual checks the elements in the arrays are identical');