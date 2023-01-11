const { assert } = require('chai');
const filterArrOfObj = require("../11_6kyu-filterArrayOfObjects");

describe("filter obj", () => {
  it("test", () => {
    const users = [
      { name: 'John', city: 'London', age: '20' },
      { name: 'Alex', city: 'Toronto', age: '23' },
      { name: 'Roe', city: 'London', age: '30' },
      { name: 'Bruno', city: 'London', age: '25' },
      { name: 'Chloe', city: 'New York', age: '35' },
    ];
    assert.deepEqual(filterArrOfObj(users, (user) => user.city === 'Toronto'), [{ name: 'Alex', city: 'Toronto', age: '23' }]);
  });
});
