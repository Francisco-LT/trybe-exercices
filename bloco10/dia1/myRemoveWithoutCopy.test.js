const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

describe('caso item estaja contido no array, retorna o array sem esse item', () => {

  test('verifica se retorna o array correto', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  });

  test('verifica se retorna o array diferente', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  });

  test('does not change the passed array', () => {
    const arr = [1, 2, 3, 4];
    myRemoveWithoutCopy(arr, 1);
    expect(arr).toEqual([2, 3, 4]);
  });

  test('verifica se retorna o array correto', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  });

})