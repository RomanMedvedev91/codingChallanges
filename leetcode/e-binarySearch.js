/*
Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
*/

const solution = function (isBadVersion) {
  return function (n) {
    let left = 1;
    let right = n;

    while (left < right) {
      const middle = Math.floor(left + (right - left) / 2);

      if (isBadVersion(middle)) {
        right = middle;
      } else {
        left = middle + 1;
      }
    }
    return left;
  };
};
