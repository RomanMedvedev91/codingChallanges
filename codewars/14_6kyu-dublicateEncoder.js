
function duplicateEncode(word) {
  const lettersArray = word.toLowerCase().split('');
  let result = '';
  const obj = {};

  for (const letter of lettersArray) {

    if (obj.hasOwnProperty(letter)) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  }

  for (const letter of lettersArray) {
    if (obj[letter] > 1) {
      result += ")";
    } else {
      result += "(";
    }
  }
  return result;

}

module.exports = duplicateEncode;