const { assert } = require('chai');
const ranks = require("../29_6kyu-rankVector");

const test = (input, expected, message) => {
  assert.deepEqual(ranks(input), expected, message);
}

describe('Test suite', () => {
  it('Fixed tests', () => {
    const tests = [
      [[], []],
      [[2], [1]],
      [[2, 2], [1, 1]],
      [[1, 2, 3], [3, 2, 1]],
      [[-5, -10, 3, 1], [3, 4, 1, 2]],
      [[-1, 3, 3, 3, 5, 5], [6, 3, 3, 3, 1, 1]],
      [[1, 10, 4], [3, 1, 2]],
      [[5, 2, 3, 5, 5, 4, 9, 8, 0], [3, 8, 7, 3, 3, 6, 1, 2, 9]],
    ];

    for (const [input, expected] of tests) {
      test(input, expected);
    }
  });
});