/*
Create function that filter object with given condition

*/
function filterArrOfObj(arr, predicate) {
  return arr.filter(el => predicate(el));
}

module.exports = filterArrOfObj;