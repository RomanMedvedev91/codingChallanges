/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

const validAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  const obj = {};

  for (let letter of s) {
    if (obj[letter]) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  }

  for (let letter of t) {
    if (!obj[letter]) {
      return false;
    } else {
      obj[letter]--;
    }
  }

  return true;
};

module.exports = validAnagram;
