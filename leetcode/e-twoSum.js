/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

const twoSum = function (nums, target) {
  const result = {};

  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (difference in result) {
      return [result[difference], i];
    }
    result[nums[i]] = i;
  }
};
module.exports = twoSum;
