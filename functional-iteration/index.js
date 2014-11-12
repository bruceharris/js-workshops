'use strict';

var numbers = [3, 4, 9];

function square(x) {
  return x * x;
}


var numbersSquared = numbers.map(square);

function isEven(x) {
  return x % 2 === 0;
}

var evenNumbers = numbers.filter(isEven);

var evenNumbersSquared = numbers.filter(isEven).map(square);

function sum(a, b) {
  return a + b;
}

// re-implement the below using numbers.forEach(...)

var total = 0;

for (var i = 0; i < numbers.length; i++) {
  total = sum(total, numbers[i]);
}

//////////////////////////////////////////////

module.exports = {
  numbers: numbers,
  numbersSquared: numbersSquared,
  evenNumbers: evenNumbers,
  evenNumbersSquared: evenNumbersSquared,
  total: total,
  square: square
};