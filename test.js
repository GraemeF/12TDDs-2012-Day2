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
  describeSingleDigit(2, 'two');
  describeSingleDigit(3, 'three');
  describeSingleDigit(4, 'four');
  describeSingleDigit(5, 'five');
  describeSingleDigit(6, 'six');
  describeSingleDigit(7, 'seven');
  describeSingleDigit(8, 'eight');
  describeSingleDigit(9, 'nine');
});
