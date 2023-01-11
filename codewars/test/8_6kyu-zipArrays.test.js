const { assert } = require('chai');
const zip = require("../8_6kyu-zipArrays");

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(zip([1, 2], ['a', 'b']), [[1, 'a'], [2, 'b']]);
    assert.deepEqual(zip([1, 2], ['a', 'b', 's']), [[1, 'a'], [2, 'b'], [undefined, 's']]);
  });
});
