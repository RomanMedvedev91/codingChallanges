const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  // [-1, 0, 3, 5, 9, 12], 9), 4)
  //
  while (left <= right) {
    const mid = left + Math.floor(right - left / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

module.exports = search;
