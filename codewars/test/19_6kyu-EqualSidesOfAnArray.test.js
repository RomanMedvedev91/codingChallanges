const { assert } = require('chai');
const findEvenIndex = require("../19_6kyu-EqualSidesOfAnArray");

describe("FindEvenIndex", function () {
  it("Tests", function () {
    Test.assertEquals(findEvenIndex([1, 2, 3, 4, 3, 2, 1]), 3, "The array was: [1,2,3,4,3,2,1] \n");
    Test.assertEquals(findEvenIndex([1, 100, 50, -51, 1, 1]), 1, "The array was: [1,100,50,-51,1,1] \n");
    Test.assertEquals(findEvenIndex([1, 2, 3, 4, 5, 6]), -1, "The array was: [1,2,3,4,5,6] \n");
    Test.assertEquals(findEvenIndex([20, 10, 30, 10, 10, 15, 35]), 3, "The array was: [20,10,30,10,10,15,35] \n");
  });
});