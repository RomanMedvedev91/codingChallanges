/*
Create function that filter object with given condition

*/
function filterObject(obj, predicate) {
  const res = {};
  for (const key in obj) {
    if (predicate(key, obj[key])) {
      console.log({ [key]: obj[key] });
      res[key] = obj[key];

      //2d option
      //   return [key].reduce((acc, key) => {
      //     return acc = { [key]: obj[key] };
      //   }, {});
    }
  }
  return res;

  //3d option 
  // const arr = Object.keys(obj).filter(key => {
  //   return predicate(key, obj[key]);
  // });
  // return arr.reduce((acc, val) => acc[val] = { [val]: obj[val] }, {});
  // return arr.map(key => obj[key]);
}

module.exports = filterObject;