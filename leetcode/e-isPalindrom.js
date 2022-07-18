const isPalindrom = (s) => {
  let str = s.toLowerCase().replace(/[\W_]+/gi, "");

  let revertStr = str.split("").reverse().join("");
  console.log(revertStr);

  return str == revertStr;
};

module.exports = isPalindrom;

console.log(isPalindrom("A man, a plan, a canal: Panama"));
