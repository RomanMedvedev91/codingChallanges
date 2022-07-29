const assert = require("chai").assert;
const canConstruct = require("../leetcode/e-canConstruct");

describe("is canConstruct", () => {
  it("aa and aab return true", () => {
    assert.equal(canConstruct("aa", "aab"), true);
  });
  // it("return false", () => {
  //   assert.equal(canConstruct("car", "tar"), false);
  // });
});
