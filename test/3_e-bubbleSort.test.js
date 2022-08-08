const assert = require("chai").assert;
const bubbleSort = require("../freecodecamp/e-bubbleSort");

describe("bubbleSort", () => {
  it("return [1, 2, 4, 8, 345]", () => {
    assert.deepEqual(bubbleSort([345, 1, 4, 2, 8]), [1, 2, 4, 8, 345]);
  });
});
