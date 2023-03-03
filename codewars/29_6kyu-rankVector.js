/*

Given an array (or list) of scores, return the array of ranks for each value in the array. The largest value has rank 1, the second largest value has rank 2, and so on. Ties should be handled by assigning the same rank to all tied values. For example:

ranks([9,3,6,10]) = [2,4,3,1]
and

ranks([3,3,3,3,3,5,1]) = [2,2,2,2,2,1,7]
because there is one 1st place value, a five-way tie for 2nd place, and one in 7th place.
*/

function ranks(a) {
  // find max and its index
  // min = length
  // 7 => rank =1 => 6 => 2  5=> 3  4=>4 3=>5 2=> 6 1=> 7 (n - 1) = 7
  // for each el of array max - el
  const copy = [...a].sort((a, b) => b - a);
  console.log(copy);

  return a.map((el) => copy.indexOf(el) + 1);

}

module.exports = ranks;
