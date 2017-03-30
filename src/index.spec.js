const expect = require('chai').expect;
const add = require('./index');

console.info(add)

describe('add', () => {

  it('should return the sum', () => {
    expect(add(1, 3)).to.equal(4);
  });

});
