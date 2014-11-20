# Array.prototype.filter()

Simplified explanation

## Summary
The filter() method creates a new array with all elements that pass the test implemented by the provided function.

## Syntax
`arr.filter(callback)`

### Parameters

* `callback` Function to test each element of the array. Return true to keep the element, false otherwise.

The callback function accepts an argument:

  * `currentValue` The current element being processed in the array.
  
The callback function will actually be invoked with 3 arguments, but we can ignore the latter 2 arguments for the simple case.

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filters) for full documentation.
