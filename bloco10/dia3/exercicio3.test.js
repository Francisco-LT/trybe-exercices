let randomNumber = () => {
  const numberX = Math.floor(Math.random() * 100);
  return numberX
}

describe('Faça duas implementações e pegue seus resultados', () => {
  test("muda-se a implementação e recebe pam1 * pam2 * param3", () => {
    randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
  
    expect(randomNumber(1, 2, 3)).toBe(6);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(1, 2, 3);
  })

  test("muda-se a implementação e recebe pam1 * 2", () => {

    randomNumber.mockReset();
    randomNumber = jest.fn().mockImplementation((a) => a * 2);
  
    expect(randomNumber(1)).toBe(2);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(1);
  })
})
