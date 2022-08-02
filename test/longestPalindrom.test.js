const assert = require("chai").assert;
const longestPalindrom = require("../leetcode/e-longestPalindrom");

describe("longestPalindrom", () => {
  it("should return 7", () => {
    assert.equal(longestPalindrom("abccccdd"), 7);
  });
  it("should return 1", () => {
    assert.equal(longestPalindrom("a"), 1);
  });
});
