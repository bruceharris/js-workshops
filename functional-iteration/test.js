'use strict';

var chai = require('chai');
var expect = chai.expect;

function square(x) {
  return x * x;
}

describe('squaring numbers in an array', function() {
  var numbersSquared = require('./index').numbersSquared;
  var numbers = require('./index').numbers;

  it('should contain expected values', function() {
    expect(numbersSquared[0]).to.equal(square(numbers[0]));
    expect(numbersSquared[1]).to.equal(square(numbers[1]));
    expect(numbersSquared[2]).to.equal(square(numbers[2]));
  });
});