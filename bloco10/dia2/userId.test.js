const getUserName = require('./userId');


describe('Get the name of the user by the ID', () => {

  describe('see if we can find an user by ID', () => {
    it('finds the user name', () => {
      expect.assertions(1);
    return (getUserName(4)).then(resolve => expect(resolve).toEqual('Mark'));
    })
  })
  
  describe('see if we can not find an user by ID', () => {
    it('returns an eror', () => {
    expect.assertions(1);
    return (getUserName(7)).catch(error => {
      expect(error).toEqual({ error: `User with 7 not found.` })
    })
  })
})
})