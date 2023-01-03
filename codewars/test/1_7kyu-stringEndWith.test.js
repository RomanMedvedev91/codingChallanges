const assert = require("chai").assert;
const stringEndWith = require("../1_7kyu-stringEndWith");

describe("string end with", () => {
  it("should return true 'abcde' and 'cde ", () => {
    assert.equal(stringEndWith('abcde', 'cde'), true)
  });
  it("should return false 'abcde' and 'abc", () => {
    assert.equal(stringEndWith('abcde', 'abc'), false)
  });
});
