const { assert } = require('chai');
const filterObject = require("../10_6kyu-filterObject");

describe("filter obj", () => {
  it("test", () => {
    const testObj = {
      1: {
        id: 1,
        name: "John",
        email: "john@gmail.com"
      },
      2: {
        id: 2,
        name: "Roe",
        email: "roe@gmail.com"
      },
      3: {
        id: 3,
        name: "Alex",
        email: "alex@gmail.com"
      }
    };
    assert.deepEqual(filterObject(testObj, (obj) => obj.name === 'Alex'),
      {
        3: {
          id: 3,
          name: "Alex",
          email: "alex@gmail.com"
        }
      });
    assert.deepEqual(filterObject(testObj, (obj) => obj.email === 'roe@gmail.com'),
      {
        2: {
          id: 2,
          name: "Roe",
          email: "roe@gmail.com"
        }
      });
  });
});
