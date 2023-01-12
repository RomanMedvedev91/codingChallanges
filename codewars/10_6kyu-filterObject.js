/*
Create function that filter object with given condition

*/
function filterObject(obj, predicate) {
  for (const key in obj) {
    if (predicate(obj[key])) {
      console.log({ [key]: obj[key] });
      return { [key]: obj[key] };

      //2d option
      //   return [key].reduce((acc, key) => {
      //     return acc = { [key]: obj[key] };
      //   }, {});
    }
  }

  //3d option 
  // const arr = Object.keys(obj).filter(key => {
  //   return predicate(key, obj[key]);
  // });
  // return arr.reduce((acc, val) => acc[val] = { [val]: obj[val] }, {});
  // return arr.map(key => obj[key]);
}

module.exports = filterObject;