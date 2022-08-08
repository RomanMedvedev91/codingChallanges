const assert = require("chai").assert;
const maxSubArray = require("../leetcode/m-maxSubArray");

describe("max sub array", () => {
  it("return 6", () => {
    assert.equal(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
  });
  it("return 23", () => {
    assert.equal(maxSubArray([5, 4, -1, 7, 8]), 23);
  });
});
