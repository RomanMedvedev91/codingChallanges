const { assert } = require('chai');
const uniqueInOrder = require("../30_6kyu_uniqueInOrder");

const test = (input, expected, message) => {
  assert.deepEqual(ranks(input), expected, message);
}

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B'])
  });
});