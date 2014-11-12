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

var total = numbers.reduce(sum, 0);

var tradeVolume = [
  { symbol: 'FB',   shares: 123 },
  { symbol: 'GOOG', shares: 432 },
  { symbol: 'TWTR', shares: 987 },
  { symbol: 'GOOG', shares: 747 },
  { symbol: 'GOOG', shares: 987 },
  { symbol: 'FB',   shares: 239 },
  { symbol: 'TWTR', shares: 726 },
  { symbol: 'FB',   shares: 227 },
];

// re-implement the following using .map() and .reduce()

var aggregateTradeVolumeBySymbol = {};

for (var i = 0; i < tradeVolume.length; i++) {
  var symbol = tradeVolume[i].symbol;
  if (! (symbol in aggregateTradeVolumeBySymbol)) {
    aggregateTradeVolumeBySymbol[symbol] = 0;
  }
  aggregateTradeVolumeBySymbol[symbol] += tradeVolume[i].shares;
}

//////////////////////////////////////////////

module.exports = {
  numbers: numbers,
  numbersSquared: numbersSquared,
  evenNumbers: evenNumbers,
  evenNumbersSquared: evenNumbersSquared,
  total: total,
  aggregateTradeVolumeBySymbol: aggregateTradeVolumeBySymbol,
  square: square
};