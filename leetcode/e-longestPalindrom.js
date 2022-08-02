const longestPalindrom = (s) => {
  const map = {};
  let count = 0;

  for (const char of s) {
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }

    if (map[char] % 2 === 0) count += 2;
  }

  //   If count is less than given string's length, it means there should be some extra characters pending from which we can take 1 character to make our final string as odd palindrome.
  //   If count and given string's length are same, it means we have taken every character from the given string and have formed an even palindrome string.
  count += count < s.length ? 1 : 0;

  return count;
};

module.exports = longestPalindrom;
