/*
This is a variation of 37. implement Binary Search (unique).

Your are given a sorted ascending array of number, but might have duplicates, you are asked to return the last index of a target number.

If not found return -1.

note

Please don't use Array.prototype.lastIndexOf(), it is not our goal.
*/

function lastIndex(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high)/2);
    if (arr[mid] === target) {
      if (arr[mid + 1] !== target) {
        return mid;
      } else {
        low = mid + 1;
      }
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    }
  }
  return -1;
}