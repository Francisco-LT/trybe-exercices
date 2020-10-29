const myFizzBuzz = require("./myFizzBuzz")
const { TestScheduler } = require("jest")

describe('função fizz buzz', () => {

  test('colocar um número divisível por 3 e 5 e ver se retorna fizzbuz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
  });

  test('colocar um número divisível por 3 e ver se retorna fizz', () => {
    expect(myFizzBuzz(6)).toBe('fizz')
  });

  test('colocar um número divisível por 5 e ver se retorna buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz')
  });

  test('colocar um número não divisível por 5 e 3 e ver se retorna ele mesmo', () => {
    expect(myFizzBuzz(11)).toBe(11)
  });

  test('colocar um item que não é número e ver se retorna false', () => {
    expect(myFizzBuzz([1, 2])).toBe(false)
  });

});