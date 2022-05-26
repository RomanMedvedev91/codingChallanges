function palindromeIndex(s) {
  // Write your code here

  const isPalindrom = (string) => {
    const reversedStr = string.split("").reverse().join("");
    return string === reversedStr;
  };

  if (isPalindrom(s)) return -1;

  const removeIndx = (str, indx) => {
    return str
      .split("")
      .filter((el, i) => i !== indx)
      .join("");
  };

  for (let i = 0; i < s.length; i++) {
    let newStr = removeIndx(s, i);
    console.log("new", newStr);

    if (isPalindrom(newStr)) {
      return i;
    }
  }

  return -1;
}

console.log(palindromeIndex("abba"));
console.log(palindromeIndex("reacecar"));
