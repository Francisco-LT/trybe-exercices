const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];


function containsA() {
  return names.reduce((acc, curr)=> 
     acc + curr.split('')
}
console.log(containsA(names))
//assert.deepEqual(containsA(), 20);