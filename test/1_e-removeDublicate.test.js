const assert = require("chai").assert;
const removeDublicate = require("../leetcode/e-removeDublicate");

describe("remove Dublicate", () => {
  it("return 5", () => {
    assert.equal(removeDublicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 5);
  });
});
