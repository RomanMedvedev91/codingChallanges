/*
Create function that accept arrays as arguments and return zipped array
zip([1, 2], ['a', 'b']) => [[1, 'a'], [2, 'b']];
*/

function zip(arr1, arr2) {
  let newArr = [];
  const maxLengthArr = arr1.length > arr2.length ? arr1 : arr2;
  for (let i = 0; i < maxLengthArr.length; i++) {
    const arr = [];
    arr.push(arr1[i], arr2[i]);
    newArr.push(arr);
  }
  return newArr;
}

module.exports = zip;