/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples

*/

function order(words) {
  const wordsArr = words.split(' ');
  const newArr = [];
  for (let i = 0; i < wordsArr.length; i++) {
    const item = wordsArr[i];
    for (let j = 0; j < wordsArr[i].length; j++) {
      const letter = parseInt(item[j]);
      if (typeof (letter) === 'number') {
        newArr[letter] = item;
      }
    }
  }
  return newArr.slice(1).join(' ');

  // 2d solution 
  //   return words.split(' ').sort(function(a, b){
  //     return a.match(/\d/) - b.match(/\d/);
  //  }).join(' ');
}

module.exports = order;