const toUpperCase = require('./exercicio4');

describe('New implamantation for all functions', () => {
  
  

  test('If the function returns the string in lowercase', () => {
    const first = jest
    .spyOn(toUpperCase, "goToUpperCase")
    .mockImplementation(a => a.toLowerCase());;
    
    expect(first('ROSA')).toBe('rosa');
    expect(first).toHaveBeenCalled();
    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith('ROSA');


    toUpperCase.mockRestore();
    
    toUpperCase()
    expect(toUpperCase).toHaveBeenCalled();
    expect(toUpperCase).toHaveBeenCalledTimes(1);
  })




})