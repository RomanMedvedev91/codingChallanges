const assert = require("chai").assert;
const climbStairs = require("../leetcode/e-climbingStairs");

describe("climbStairs", () => {
  it("6 stairs return 13 steps", () => {
    assert.equal(climbStairs(6), 13);
  });
});
