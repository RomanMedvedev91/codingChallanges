/*
Create function that filter object with given condition

*/
function filterObject(obj, predicate) {
  const arr = Object.keys(obj).filter(key => {
    return predicate(obj[key].name);
  });
  return arr.reduce((acc, val) => acc[val] = { [val]: obj[val] }, {});
  // return arr.map(key => obj[key]);
}

module.exports = filterObject;