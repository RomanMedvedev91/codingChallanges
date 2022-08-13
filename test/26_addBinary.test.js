const assert = require("chai").assert;
const addBinary = require("../leetcode/26_e-addBinary");

describe("addBinary", () => {
  it("[11 and 1 should return 100", () => {
    assert.equal(addBinary("11", "1"), "100");
  });
  it("1010 and 1011 should return 10101", () => {
    assert.equal(addBinary("1010", "1011"), "10101");
  });
});
