const assert = require('assert');

function add (a, b) {
  return a + b;
}

const expected = add(1 ,2);

assert.equal(expected, 5, 'one plus two is three');

