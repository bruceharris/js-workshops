'use strict';

var chai = require('chai');
var expect = chai.expect;
var index = require('./index');
var numbersSquared = index.numbersSquared;
var numbers = index.numbers;
var square = index.square;
var evenNumbers = index.evenNumbers;

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
