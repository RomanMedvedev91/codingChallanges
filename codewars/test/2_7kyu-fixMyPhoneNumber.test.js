const assert = require("chai").assert;
const isItANum = require("../2_7kyu-fixMyPhoneNumber");

describe("isItANum", () => {
  it("isItANum", () => {
    assert.equal(isItANum("S:)0207ERGQREG88349F82!efRF"), '02078834982')
  });
});
