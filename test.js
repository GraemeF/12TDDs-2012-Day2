var convert = require('./index');
require('chai').should();

describe('Number names', function() {
  it('should convert 0 to zero', function() {
    convert(0).should.equal('zero');
  });
});
