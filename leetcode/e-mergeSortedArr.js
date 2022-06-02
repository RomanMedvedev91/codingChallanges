const merge = (arr1, m, arr2, n) => {
  let point1 = m - 1;
  let point2 = n - 1;

  for (let i = arr1.length - 1; i >= 0; i--) {
    if (point1 >= 0 && arr1[point1] >= arr2[point2]) {
      arr1[i] = arr1[point1];
      point1--;
    } else if (point2 >= 0) {
      arr1[i] = arr2[point2];
      point2--;
    }
  }

  return arr1;
};

module.exports = merge;
