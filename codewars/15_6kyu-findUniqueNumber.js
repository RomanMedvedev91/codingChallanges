function findUniq(arr) {
  return arr.find((item) => arr.indexOf(item) === arr.lastIndexOf(item));

  // 2nd way
  // arr.sort((a,b)=>a-b);
  // return arr[0]==arr[1]?arr.pop():arr[0];
}

module.exports = findUniq;