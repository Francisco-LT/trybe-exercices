const myRemove = require('./myRemove');

describe('a função verifica se um número existe em determinado arrya, caso exista o remove', () => {
  test('verifica se retorna o array correto', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  });

  test('verifica se retorna o array diferente', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  });

  test('does not change the passed array', () => {
    const arr = [1, 2, 3, 4];
    myRemove(arr, 1);
    expect(arr).toEqual([1, 2, 3, 4]);
  });

  test('verifica se retorna o array correto', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  });
});