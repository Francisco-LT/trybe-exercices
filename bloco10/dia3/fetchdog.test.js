let { fetchJoke } = require('./fetchdog');


describe('', () => {
  fetchJoke = jest.fn(); // apaga a implementação de fetchJoke

  afterEach(() => {
    fetchJoke.mockReset();
  })
  test('when request is successful', () => {
    fetchJoke.mockResolvedValue('request succes');

    expect(fetchJoke()).resolves.toBe('request succes')
    expect(fetchJoke).toHaveBeenCalledTimes(1)
  })
  test('when reques fails', () => {
    fetchJoke.mockRejectedValue('request failed');

    expect(fetchJoke()).rejects.toBe('request failed')
    expect(fetchJoke).toHaveBeenCalledTimes(1)
  })
});

