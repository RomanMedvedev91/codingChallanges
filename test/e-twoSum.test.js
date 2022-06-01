const assert = require("chai").assert;
const twoSum = require("../leetcode/e-twoSum");

describe("twoSum", () => {
  it("should return [0, 1]", () => {
    assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
  });
});
