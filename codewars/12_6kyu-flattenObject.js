/*
Create function that flate the object
  const obj = {
  a: {
    b: 2
    c: 3,
    d: ['asdlkfj']
  }
};

update({
  a: {
    b: 3,
    d: null
  }
});


// udpate -> 
// { a: { b: 3 } } -> { 'a.b': 3 }
// -> { 'a.b': 3,  }
{
  $set: {
    'a.b': 3
  },
  $unset: {
    d: ''
  }
}
*/
function flattenObject(object, prefix = '') {
  const arr = Object.keys(object).reduce((acc, key) => {
    pre = prefix.length ? prefix + '.' : '';
    if (typeof object[key] === 'object') {
      Object.assign(acc, flattenObject(object[key], pre + key));
    } else {
      acc[pre + key] = object[key];
    }
    return acc;
  }, {})
  return arr;
}

const obj = {
  a: {
    b: 2,
    c: 3,
    d: ['asdlkfj']
  },
  abc: 12,
};

console.log(flattenObject(obj));
module.exports = flattenObject;