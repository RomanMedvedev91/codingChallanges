const assert = require("chai").assert;
const merge = require("../leetcode/e-mergeSortedArr");

describe("merge sorted arrays", () => {
  it("return [1,2,2,3,5,6]", () => {
    assert.deepEqual(
      merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3),
      [1, 2, 2, 3, 5, 6]
    );
  });
  it("return [1]", () => {
    assert.deepEqual(merge([1], 1, [], 0), [1]);
  });
  it("return [1]", () => {
    assert.deepEqual(merge([0], 0, [1], 1), [1]);
  });
});
