const assert = require("chai").assert;
const stringEndWith = require("../1-7kyu-stringEndWith");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(solution('abcde', 'cde'), true)
    Test.assertEquals(solution('abcde', 'abc'), false)
  });
});
