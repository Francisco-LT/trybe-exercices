const getRepos = require('./buscaAPI');

describe('See if contains repositroy', () => {
  it('contains the repostory in the list', async (done) => {
    const response = await getRepos('https://api.github.com/users/tryber/repos')
    expect(response).toContain('exercise-end-block5')
    done()
  })
})