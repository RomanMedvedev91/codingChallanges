const assert = require("chai").assert;
const islandPerimeter = require("../leetcode/e-islandPerimeter");

describe("island Perimetr", () => {
  it("return 16", () => {
    assert.equal(
      islandPerimeter([
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0],
      ]),
      16
    );
  });
  it("return 4", () => {
    assert.equal(islandPerimeter([[1]]), 4);
  });
  it("return 4", () => {
    assert.equal(islandPerimeter([[1, 0]]), 4);
  });
});
