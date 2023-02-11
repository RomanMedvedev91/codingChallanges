const { assert } = require('chai');
const twoOldestAges = require("../21_7kyu-oldest");

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {

    let results1 = twoOldestAges([1, 5, 87, 45, 8, 8]);
    let results2 = twoOldestAges([6, 5, 83, 5, 3, 18]);

    assert.strictEqual(results1[0], 45, 'Passed values of [1,5,87,45,8,8] should return [45, 87]');
    assert.strictEqual(results1[1], 87, 'Passed values of [1,5,87,45,8,8] should return [45, 87]');

    assert.strictEqual(results2[0], 18, 'Passed values of [6,5,83,5,3,18] should return [18, 83]');
    assert.strictEqual(results2[1], 83, 'Passed values of [6,5,83,5,3,18] should return [18, 83]');
  })
})