'use strict';

var chai = require('chai');
var expect = chai.expect;
var index = require('./index');
var numbersSquared = index.numbersSquared;
var numbers = index.numbers;
var square = index.square;
var evenNumbers = index.evenNumbers;
var evenNumbersSquared = index.evenNumbersSquared;
var total = index.total;

describe('squaring numbers in an array', function() {
  it('should contain expected values', function() {
    expect(numbersSquared[0]).to.equal(square(numbers[0]));
    expect(numbersSquared[1]).to.equal(square(numbers[1]));
    expect(numbersSquared[2]).to.equal(square(numbers[2]));
  });
});

describe('filtering an array', function() {
  it('should contain the even numbers in the original array', function() {
    expect(evenNumbers.length).to.equal(1);
    expect(evenNumbers[0]).to.equal(4);
  });
});

describe('filtering and squaring numbers in an array', function() {
  it('should contain the squares of the even numbers in the original array', function() {
    expect(evenNumbersSquared.length).to.equal(1);
    expect(evenNumbersSquared[0]).to.equal(16);
  });
});

describe('aggregating numbers in an array - total', function() {
  it('should contain the sum of the numbers in the original array', function() {
    expect(total).to.equal(16);
  });
});

