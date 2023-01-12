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

*/

function flattenObject(obj, prefix = '') {
  let newObj = {};
  for (const key in obj) {
    let newKey = prefix.length ? prefix + '.' : '';
    if (typeof obj[key] === 'object') {
      newObj = { ...newObj, ...flattenObject(obj[key], newKey + key) };
    } else {
      newObj[newKey + key] = obj[key];
    }
  }
  return newObj;
}

// 2nd solution
// function flattenObject(object, prefix = '') {
//   const arr = Object.keys(object).reduce((acc, key) => {
//     pre = prefix.length ? prefix + '.' : '';
//     if (typeof object[key] === 'object') {
//       Object.assign(acc, flattenObject(object[key], pre + key));
//     } else {
//       acc[pre + key] = object[key];
//     }
//     return acc;
//   }, {})
//   console.log(arr);
//   return arr;
// }

// const obj = {
//   a: {
//     b: 2,
//     c: 3,
//     d: ['asdlkfj']
//   },
//   abc: 12,
// };

// console.log(flattenObject(obj));
module.exports = flattenObject;