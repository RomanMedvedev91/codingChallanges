const { assert } = require('chai');
const myLanguages = require("../23_7kyu-myLanguages");

describe("myLanguages", function () {
  it("Fixed tests", function () {
    assert.deepEqual(myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 }), ["Ruby", "Python"])
    assert.deepEqual(myLanguages({ "Hindi": 60, "Greek": 71, "Dutch": 93 }), ["Dutch", "Greek", "Hindi"])
    assert.deepEqual(myLanguages({ "C++": 50, "ASM": 10, "Haskell": 20 }), [])
  });
});