const isBadVersion = (n) => {
  let left = 0;
  let right = n;

  while (left <= right) {
    let middle = left + Math.floor(right - left / 2);

    if (isBadVersion(middle) && !isBadVersion(middle - 1)) {
      return middle;
    } else if (isBadVersion(middle) && isBadVersion(middle - 1)) {
      right = middle - 2;
    } else {
      left = middle + 1;
    }
  }
};

module.exports = isBadVersion;
