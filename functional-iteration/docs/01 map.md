# Array.prototype.map()

Simplified explanation

## Summary
The map() method creates a new array with the results of calling a provided function on every element in this array.

## Syntax
`arr.map(callback)`

### Parameters

* `callback` Function that produces an element of the new Array.

The callback function accepts   an argument:

  * `currentValue` The current element being processed in the array.

The callback function must return a value - that value will be the corresponding element in the new array.
  
The callback function will actually be invoked with 3 arguments, but we can ignore the latter 2 arguments for the simple case.

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) for full documentation.