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

// re-implement the below in a purely functional style

var evenNumbersSquared = [];

for (var i = 0; i < numbers.length; i++) {
  if (isEven(numbers[i])) {
    evenNumbersSquared.push(square(numbers[i]));
  }
}

//////////////////////////////////////////////

module.exports = {
  numbers: numbers,
  numbersSquared: numbersSquared,
  evenNumbers: evenNumbers,
  evenNumbersSquared: evenNumbersSquared,
  square: square
};