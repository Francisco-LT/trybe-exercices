const sum = require('./sum');

describe('sum numbers', () => {
  test('verifique se a soma dos sois valores é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('verifique se a soma dos sois valores é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('verifique se dá um erro quando somarmos uma string', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  test('verifique se esse erro emite a mensagem parameters must be numbers', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow('parameters must be numbers');
  });

})
