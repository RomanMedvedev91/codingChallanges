/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

*/

export const stringEndWith = (str, ending) => {
  // return str.slice(str.length - ending.length) === ending;
  
  // 2nd solution
  if (typeof(str) !== 'string' || typeof(ending) !== 'string') throw new Error('wrong type');
  return str.stringEndWith(ending)
}