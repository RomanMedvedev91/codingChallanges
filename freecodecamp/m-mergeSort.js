const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let mergeArr = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) mergeArr.push(arr2[j++]);
    else mergeArr.push(arr1[i++]);
  }
  while (i < arr1.length) {
    mergeArr.push(arr1[i++]);
  }
  while (j < arr2.length) {
    mergeArr.push(arr2[j++]);
  }
  return mergeArr;
};

function mergeSort(array) {
  if (array.length === 1) return array;

  let middle = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, middle));
  let right = mergeSort(array.slice(middle));

  return merge(left, right);
}

console.log(
  mergeSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
);
