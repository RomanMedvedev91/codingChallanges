const assert = require("chai").assert;
const isPalindrom = require("../leetcode/e-isPalindrom");

describe("is Palindrom", () => {
  it("return true", () => {
    assert.equal(isPalindrom("A man, a plan, a canal: Panama"), true);
  });
});
