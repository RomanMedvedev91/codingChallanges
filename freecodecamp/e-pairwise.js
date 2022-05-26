function pairwise(arr, arg) {
  let result = [];
  // Check every pair
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (
        arr[i] + arr[j] == arg &&
        !result.includes(i) &&
        !result.includes(j)
      ) {
        result.push(i, j);
      }
    }
  }

  return result.reduce((sum, curr, index) => sum + curr, 0);
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7)); // should return 11.
