const assert = require("chai").assert;
const floodFill = require("../leetcode/e-floodFill");

describe("Flood fill", () => {
  it("return [ [ 2, 2, 2 ], [ 2, 2, 0 ], [ 2, 0, 1 ] ]", () => {
    assert.deepEqual(
      floodFill(
        [
          [1, 1, 1],
          [1, 1, 0],
          [1, 0, 1],
        ],
        1,
        1,
        2
      ),
      [
        [2, 2, 2],
        [2, 2, 0],
        [2, 0, 1],
      ]
    );
  });
  it("return [[0, 0, 0], [0, 0, 0]]", () => {
    assert.deepEqual(
      floodFill(
        [
          [0, 0, 0],
          [0, 0, 0],
        ],
        0,
        0,
        0
      ),
      [
        [0, 0, 0],
        [0, 0, 0],
      ]
    );
  });
});
