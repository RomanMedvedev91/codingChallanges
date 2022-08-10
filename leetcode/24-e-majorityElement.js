const majorityElement = (nums) => {
  let num = 0,
    count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      num = nums[i];
      count = 1;
    } else if (num === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return num;
};

module.exports = majorityElement;
