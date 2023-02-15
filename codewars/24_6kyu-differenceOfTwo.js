/*

The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

The result array should be sorted in ascending order of values.

Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

Examples
[1, 2, 3, 4]  should return [[1, 3], [2, 4]]

[4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

[1, 23, 3, 4, 7] should return [[1, 3]]

[4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]
*/

function twosDifference(input) {
  //Enter your solution here
  // sort
  // loop a
  // loop b = a+1
  // check if b - a diff = 2 => push to arr
  // return

  let result = [];
  const sortedArr = input.sort((a, b) => a - b);
  for (let a = 0; a < sortedArr.length; a++) {
    for (let b = a + 1; b < sortedArr.length; b++) {
      if ((sortedArr[b] - sortedArr[a]) === 2) {
        result.push([sortedArr[a], sortedArr[b]]);
      }
    }
  }
  return result;
}

module.exports = twosDifference;