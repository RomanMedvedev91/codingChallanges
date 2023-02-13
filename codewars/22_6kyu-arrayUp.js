/*
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
Valid arrays

[4, 3, 2, 5] would return [4, 3, 2, 6]
[1, 2, 3, 9] would return [1, 2, 4, 0]
[9, 9, 9, 9] would return [1, 0, 0, 0, 0]

Invalid arrays

[1, -9] is invalid because -9 is not a non-negative integer

[1, 2, 33] is invalid because 33 is not a single-digit integer

*/

function upArray(arr) {
  isValid = arr.some(num => num < 0 || num > 9);
  if (isValid) return null;
  const valueRepresentedByArray = parseInt(arr.join('')) + 1;
  return valueRepresentedByArray.toString().split('').map(el => parseInt(el));
}

module.exports = upArray;