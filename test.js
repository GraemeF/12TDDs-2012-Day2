var convert = require('./index');
require('chai').should();

describe('Number names', function() {
  it('should convert 0 to zero', function() {
    convert(0).should.equal('zero');
  });
  it('should convert 1 to one', function() {
    convert(1).should.equal('one');
  });
});
