const { assert } = require('chai');
const zipNth = require("../9_6kyu-zipMultiArrays");

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(zipNth([1, 2, 3, 4], ['a', 'b', 'c', 'd'], [10, 20, 30]), [[1, 'a', 10], [2, 'b', 20], [3, 'c', 30], [4, 'd', undefined]]);
  });
});
