function quickSort(array) {
  if (array.length === 0) return [];

  const pivot = array[0];

  let lesser = [];
  let equal = [];
  let greater = [];

  for (let e of array) {
    if (e < pivot) lesser.push(e);
    else if (e > pivot) greater.push(e);
    else equal.push(e);
  }
  return [...quickSort(lesser), ...equal, ...quickSort(greater)];
}

// 2d solution

// function swap (x, y, array) {
//   [array[x], array[y]] = [array[y], array[x]];
// }

// function pivot (arr, left = 0, right = arr.length - 1) {
//   let shift = left;
//   for (let i = left +1; i <= right; i++) {
//     if (arr[i] < arr[left]) swap(arr, i, ++shift);
//   }
//   swap (arr, left, shift);
//   return shift;
// }

// function quickSort(array, left=0, right=array.length-1) {
//   if (left < right) {
//     let pivotIndex = pivot(array, left, right);

//     quickSort(array, left, pivotIndex - 1);
//     quickSort(array, pivotIndex + 1, right);
//   }
//   return array;
// }
