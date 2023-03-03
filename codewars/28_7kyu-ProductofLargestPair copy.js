/*

Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.
All inputs will be valid.
Passing [2, 6, 3] should return 18, the product of [6, 3].


maxProduct([2, 1, 5, 0, 4, 3])              // 20
maxProduct([7, 8, 9])                       // 72
maxProduct([33, 231, 454, 11, 9, 99, 57])   // 104874
*/

function maxProduct(a) {
  let maxNum = a[0];
  let max2 = 0;

  for (let i = 1; i < a.length; i++) {
    if (a[i] > maxNum) {
      max2 = maxNum;
      maxNum = a[i];
    }
    else if (a[i] > max2 && a[i] !== maxNum) {
      max2 = a[i]
    }
  }
  return maxNum * max2;
}

module.exports = maxProduct;