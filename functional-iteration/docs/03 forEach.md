# Array.prototype.forEach()

Simplified explanation

## Summary
The forEach() method executes a provided function once per array element.

## Syntax
`arr.forEach(callback)`

### Parameters

* `callback` Function to execute for each element.

The callback function accepts an argument:

  * `currentValue` The current element being processed in the array.
  
The callback function will actually be invoked with 3 arguments, but we can ignore the latter 2 arguments for the simple case.

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) for full documentation.