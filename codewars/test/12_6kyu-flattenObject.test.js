const { assert } = require('chai');
const flattenObject = require("../12_6kyu-flattenObject");

describe("filter obj", () => {
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
    assert.deepEqual(flattenObject(testObj), { 'foo.a': 10, 'foo.b': 12, 'bar.c.d': 1000, 'bar.c.e': 1100, 'bar.f': 200, 'v': 5 });
    assert.deepEqual(flattenObject(users), {
      '100.name': 'John',
      '100.skills.frontend': 'react',
      '100.skills.backend': 'node',
      '101.name': 'Alex',
      '101.skills.frontend': 'vue',
      '101.skills.backend': 'rubyOnRails',

      '102.name': 'Roe',
      '102.skills.frontend': 'angular',
      '102.skills.backend': 'java',
    });
  });
});
