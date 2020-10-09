const assert = require('assert')

const sum = (...numbers) => {//o parÂmetro ...numbers armazena a quantidade de valores que colocarmos no console.log
  let total = 0;
  for (number of numbers) {
    total += number
  }
  return total
}


assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)