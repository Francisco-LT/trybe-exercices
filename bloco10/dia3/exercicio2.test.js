let randomNumber = () => {
  const numberX = Math.floor(Math.random() * 100);
  return numberX
}

test("muda-se a implementação e recebe pam1 / pam2", () => {
  randomNumber = jest.fn().mockImplementation((a, b) => a / b);

  expect(randomNumber(10, 2)).toBe(5);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
  
})