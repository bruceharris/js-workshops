'use strict';

var numbers = [3, 4, 9];

function square(x) {
  return x * x;
}


// re-implement the below using numbers.map(...)

var numbersSquared = [];

for (var i = 0; i < numbers.length; i++) {
  numbersSquared.push(square(numbers[i]));
}

//////////////////////////////////////////////

module.exports = {
  numbers: numbers,
  numbersSquared: numbersSquared,
  square: square
};