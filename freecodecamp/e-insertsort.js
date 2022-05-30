function insertionSort(array) {
  // Only change code below this line
  let j;
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    console.log("current", current);
    for (j = i - 1; j >= 0 && array[j] > current; j--) {
      array[j + 1] = array[j];
      console.log("array[j+1]", array, j);
    }
    array[j + 1] = current;
    console.log("array[j + 1]22222", array, j);
  }
  return array;
  // Only change code above this line
}

console.log(insertionSort([1, 4, 2, 8, 345, 123, 43]));
