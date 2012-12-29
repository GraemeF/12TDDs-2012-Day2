var convert = require('./index');
require('chai').should();

describe('Number names', function() {
  var describeSingleDigit = function(n, expected) {
      it('should convert ' + n + ' to ' + expected, function() {
        convert(n).should.equal(expected);
      });
    };

  describeSingleDigit(0, 'zero');
  describeSingleDigit(1, 'one');
});
