'use strict';

var numbers = [3, 4, 9];

var numbersSquared = [];

for (var i = 0; i < numbers.length; i++) {
  numbersSquared.push(numbers[i] * numbers[i]);
}

module.exports = {
  numbers: numbers,
  numbersSquared: numbersSquared
};