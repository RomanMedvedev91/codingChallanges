/* Given an array with all distinct elements, find the largest three elements. Expected time complexity is O(n) and extra space is O(1).
*/



// const arr = [10, 4, 3, 50, 23, 90] Output: 90, 50, 23

const findMax = (arr) => {
  let first;
  let second;
  let third;
  third = second = first = Number.MIN_VALUE;
  for (i = 0; i < arr.length; i++) {
    let curr = arr[i];
    if (curr > first) {
      third = second;
      second = first;
      first = curr;
    } else if (curr > second) {
      third = second;
      second = curr;
    } else if(curr > third) {
      third = curr;
    }
  }
  return [first, second, third];
}

// Time complexity: O(n)

console.log(findMax([10, 4, 3, 50, 23, 90]));