const canConstruct = (ransomNote, magazine) => {
  let newNote = "";

  const obj = {};

  for (let i = 0; i < magazine.length; i++) {
    if (obj[magazine[i]]) {
      obj[magazine[i]]++;
    } else {
      obj[magazine[i]] = 1;
    }
  }
  console.log(obj);
  for (let i = 0; i < ransomNote.length; i++) {
    if (!obj[ransomNote[i]]) {
      return false;
    } else {
      newNote += ransomNote[i];
      obj[ransomNote[i]]--;
    }
  }

  return ransomNote === newNote;
};

module.exports = canConstruct;
