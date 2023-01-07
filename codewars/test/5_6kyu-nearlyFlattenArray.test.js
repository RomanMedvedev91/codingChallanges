const { assert } = require('chai');
const nearFlatten = require("../5_6kyu-nearlyFlattenArray");

describe("Solution", function () {
  it("should return an empty array if given an empty array", () => {
    const actual = nearFlatten([[1]]);
    const expected = [[1]];
    assert.deepEqual(actual, expected);
  });
});

describe("Solution", function () {
  it("should return the original array if given a flat array", () => {
    const actual = nearFlatten([[1, 2, 3, 4]]);
    const expected = [[1, 2, 3, 4]];
    assert.deepEqual(actual, expected);
  });
});

describe("Solution", function () {
  it("should return a correctly flattened array", () => {
    const actual = nearFlatten([[1, 2, 3], [[4, 5], [6, 7, 8]]]);
    const expected = [[1, 2, 3], [4, 5], [6, 7, 8]];
    assert.deepEqual(actual, expected);
  });
});

describe("Solution", function () {
  it("should return a correctly flattened array that is sorted correctly", () => {
    const actual = nearFlatten([[[1, 2, 3], [9, 10]], [[4, 5], [6, 7, 8]]]);
    const expected = [[1, 2, 3], [4, 5], [6, 7, 8], [9, 10]];
    assert.deepEqual(actual, expected);
  });
});
