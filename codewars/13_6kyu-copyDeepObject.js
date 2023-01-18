/*
deep copy of object

*/

function deepCopyObj(obj) {
  let newObj = {};
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      newObj = { ...newObj, [key]: deepCopyObj(obj[key]) }
    } else {
      newObj = { ...newObj, [key]: obj[key] }
    }
  }
  return newObj;
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

console.log(deepCopyObj(users));
module.exports = deepCopyObj;