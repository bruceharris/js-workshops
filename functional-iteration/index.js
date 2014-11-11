'use strict';

var numbers = [3, 4, 9];

function square(x) {
  return x * x;
}


var numbersSquared = numbers.map(square);

function isEven(x) {
  return x % 2 === 0;
}

// re-implement the below using numbers.filter(...)

var evenNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  if (isEven(numbers[i])) {
    evenNumbers.push(numbers[i]);
  }
}


//////////////////////////////////////////////

module.exports = {
  numbers: numbers,
  numbersSquared: numbersSquared,
  evenNumbers: evenNumbers,
  square: square
};