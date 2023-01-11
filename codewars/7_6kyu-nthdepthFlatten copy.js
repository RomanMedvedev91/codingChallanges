/*
Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]
*/

function flatten(array) {
  if (array.length === 0) return array;
  // 1st 
  // return array.flat();

  //2nd
  // return array.reduce((acc, val) => acc.concat(val), [])

  //3d any depth
  // let result = [];
  // for (const el of array) {
  //   if (Array.isArray(el)) {
  //     result = result.concat(flatten(el));
  //   } else {
  //     result.push(el);
  //   }
  // }
  // return result;

  // 4th any depth
  // return array.flat(Infinity);

  //5th any depth
  return array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
}

module.exports = flatten;