const { assert } = require('chai');
const twosDifference = require("../24_6kyu-differenceOfTwo");

describe("Sample tests", function () {
  it("Tests", function () {
    assert.deepEqual(twosDifference([1, 2, 3, 4]), [[1, 3], [2, 4]]);
    assert.deepEqual(twosDifference([1, 3, 4, 6]), [[1, 3], [4, 6]]);
  });
});