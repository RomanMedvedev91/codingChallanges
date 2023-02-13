const { assert } = require('chai');
const upArray = require("../22_6kyu-arrayUp");

describe("Tests", () => {
  it("test", () => {
    assert.sameOrderedMembers(upArray([4, 3, 2, 5]), [4, 3, 2, 6]);
    assert.sameOrderedMembers(upArray([2, 3, 9, 9]), [2, 4, 0, 0]);
    assert.sameOrderedMembers(upArray([9, 9]), [1, 0, 0]);

    assert.isNull(upArray([1, -9]));
    assert.isNull(upArray([1, 10]));
  });
});