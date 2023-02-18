const { assert } = require('chai');
const sortReindeer = require("../27_7kyu-SortSanta'sReindeer");

describe('Sample tests', function () {
  it('Tests', function () {
    let input = [
      "Dasher Tonoyan", "Dancer Moore", "Prancer Chua", "Vixen Hall",
      "Comet Karavani", "Cupid Foroutan", "Donder Jonker", "Blitzen Claus"
    ];
    let output = [
      "Prancer Chua", "Blitzen Claus", "Cupid Foroutan", "Vixen Hall",
      "Donder Jonker", "Comet Karavani", "Dancer Moore", "Dasher Tonoyan"
    ];
    assert.deepEqual(sortReindeer(input), output);
  });
});