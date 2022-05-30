function bubbleSort(array) {
  // Only change code below this line
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      console.log(j);
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
  // Only change code above this line
}

console.log(bubbleSort([345, 1, 4, 2, 8]));
// console.log(
//   bubbleSort([
//     1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
//   ])
// );
