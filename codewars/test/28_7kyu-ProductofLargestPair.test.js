const { assert } = require('chai');
const maxProduct = require("../28_7kyu-ProductofLargestPair");

describe("Max Product", function () {
  it("should return the max product of a pair in given array", function () {
    assert.equal(maxProduct([56, 335, 195, 443, 6, 494, 252]), 218842);
    assert.equal(maxProduct([154, 428, 455, 346]), 194740);
    assert.equal(maxProduct([39, 135, 47, 275, 37, 108, 265, 457, 2, 133, 316, 330, 153, 253, 321, 411]), 187827);
    assert.equal(maxProduct([136, 376, 10, 146, 105, 63, 234]), 87984);
    assert.equal(maxProduct([354, 463, 165, 62, 472, 53, 347, 293, 252, 378, 420, 398, 255, 89]), 218536);
    assert.equal(maxProduct([346, 446, 26, 425, 432, 349, 123, 269, 285, 93, 75, 14]), 192672);
    assert.equal(maxProduct([134, 320, 266, 299]), 95680);
    assert.equal(maxProduct([114, 424, 53, 272, 128, 215, 25, 329, 272, 313, 100, 24, 252]), 139496);
    assert.equal(maxProduct([375, 56, 337, 466, 203]), 174750);
  });
});