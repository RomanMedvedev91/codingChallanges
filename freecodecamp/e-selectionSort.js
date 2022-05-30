function selectionSort(array) {
  // Only change code below this line
  const swap = (i, j, arr) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
  };

  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) min = j;
    }
    swap(i, min, array);
  }
  return array;
}

// selectionSort([4,8,345,2,123,43]);
