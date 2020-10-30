const getUserName = require('./userId');


describe('Get the name of the user by the ID', () => {

  describe('see if we can find an user by ID', () => {
    it('finds the user name', async (done) => {
      const response = await getUserName(4);
      expect(response).toEqual('Mark')
      done()
    })
  })
  
  describe('see if we can not find an user by ID', () => {
    it('returns an eror', async () => {
      try {
        await getUserName(7);
      } catch (error) {
        expect(error).toEqual({ error: 'User with 7 not found.' });
      }
    })
})
})