const { assert } = require('chai');
const deepCopyObj = require("../13_6kyu-copyDeepObject");

describe("clone obj", () => {
  it("test", () => {
    const testObj = {
      foo: {
        a: 10,
        b: 12
      },
      bar: {
        c: {
          d: 1000,
          e: 1100
        },
        f: 200
      },
      v: 5
    }

    const users = {
      100: {
        name: 'John', skills: {
          frontend: 'react',
          backend: 'node'
        }
      },
      101: {
        name: 'Alex', skills: {
          frontend: 'vue',
          backend: 'rubyOnRails'
        }
      },
      102: {
        name: 'Roe', skills: {
          frontend: 'angular',
          backend: 'java'
        }
      },
    };
    assert.deepEqual(deepCopyObj(testObj), testObj);
    assert.deepEqual(deepCopyObj(users), users);
  });
});
