const assert = require("chai").assert;
const maxProfit = require("../leetcode/e-maxProfit");

describe("max profit", () => {
  it("should return 5", () => {
    assert.equal(maxProfit([7, 1, 5, 3, 6, 4]), 5);
  });
  it(" should return 0", () => {
    assert.equal(maxProfit([7, 6, 3, 1]), 0);
  });
});
