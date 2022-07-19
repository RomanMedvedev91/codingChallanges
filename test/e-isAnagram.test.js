const assert = require("chai").assert;
const isAnagram = require("../leetcode/e-validAnagram");

describe("is Anagram", () => {
  it("return true", () => {
    assert.equal(isAnagram("anagram", "nagaram"), true);
  });
  it("return false", () => {
    assert.equal(isAnagram("car", "tar"), false);
  });
});
