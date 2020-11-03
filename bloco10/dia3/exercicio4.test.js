let {toUpperCase} = require('./exercicio4');
let {returnFistLetter} = require('./exercicio4');
let {concatStrings} = require('./exercicio4');

describe('New implamantation for all functions', () => {

  test('If the function returns the string in lowecase', () => {
    toUpperCase = jest.fn().mockImplementation((str) => str.toLowerCase());

    expect(toUpperCase('ROSA')).toBe('rosa');
    expect(toUpperCase).toHaveBeenCalled();
    expect(toUpperCase).toHaveBeenCalledTimes(1);
    expect(toUpperCase).toHaveBeenCalledWith('ROSA');
  })

  test('If the function returns the last letter of the word', () => {
    returnFistLetter = jest.fn().mockImplementation(str => {
      const word = str.split("");
      return word[word.length-1]
    })
    expect(returnFistLetter('rosa')).toBe('a')
    expect(returnFistLetter).toHaveBeenCalled();
    expect(returnFistLetter).toHaveBeenCalledTimes(1);
    expect(returnFistLetter).toHaveBeenCalledWith('rosa');
  })

  test('If the function recive trhee parameters and retun then concatenated', () => {
    concatStrings = jest.fn().mockImplementation((str1, str2, str3) => str1.concat(str2, str3));
    expect(concatStrings('rosa ', 'lira ', 'de oliveira')).toBe('rosa lira de oliveira')
    expect(concatStrings).toHaveBeenCalled();
    expect(concatStrings).toHaveBeenCalledTimes(1);
    expect(concatStrings).toHaveBeenCalledWith('rosa ', 'lira ', 'de oliveira');
  })
})