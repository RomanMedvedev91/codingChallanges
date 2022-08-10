const assert = require("chai").assert;
const majorityElement = require("../leetcode/24-e-majorityElement");

describe("majorityElement", () => {
  it("[3,2,3] should return 3", () => {
    assert.equal(majorityElement([3, 2, 3]), 3);
  });
  it(" [2,2,1,1,1,2,2] should return 2", () => {
    assert.equal(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
  });
  it("[1] should return 1", () => {
    assert.equal(majorityElement([1]), 1);
  });
});
