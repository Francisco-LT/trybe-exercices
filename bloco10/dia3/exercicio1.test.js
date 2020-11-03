let randomNumber = () => {
  const numberX = Math.floor(Math.random() * 100);
  return numberX
}

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  randomNumber = jest.fn().mockReturnValue(10);

  afterEach(() => {
    fetchDog.mockReset();
  });
  
  expect(randomNumber()).toBe(10);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);

});