require('should');
var f = require('../index');

describe('Calculating alcohol', function() {
  it('Should calculate the expected value', function() {
    f(1.050, 1.010).should.equal(5.240000000000005);
  });
  it('Should throw an error if we do not supply OG', function() {
    (function() {f()}).should.throw('No OG provided');
  });
});
