const assert = require("chai").assert;
const isValid = require("../leetcode/e-parentheses");

describe("is Valid", () => {
  it("return true", () => {
    assert.equal(isValid("()"), true);
  });
  it("return true", () => {
    assert.equal(isValid("()[]{}"), true);
  });
  it("return false", () => {
    assert.equal(isValid("(]"), false);
  });
});
