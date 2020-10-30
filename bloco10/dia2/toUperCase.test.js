const uppercase = require('./toUperCase');

it('make the hole word go to upercase', (done) => {
  uppercase('letsgo', (str) => {
    expect(str).toBe('LETSGO');
    done()
  }) 
})