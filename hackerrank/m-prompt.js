/*

given a string of only integer characters str, separate the string into subsets such that each subset has the same single-digit total sum. Use an underscore _ to separate subsets in the input string. Return all such subset creations in a result arrav, and then sort that arrav lexicographically betore returning it.
Description
Input: string str
Output: string result

Examples and Explanations

Thout: 11741380
Output: ["17 413_80", "174 1380",
1741380"7

Exolanation: The last element in the result arrav 1741380" is just the input string itself. This is considered to be one of the subsets as the whole input Is a subset of itselt. Additionally. as this is the only subset. the sum of its single digits is 1+7+4+1+3+8+0, which is 24. With no other subset to compare to, this means that every subset (just the one has the same single anglt sum. As for the other two:
+6 =>
1+7÷4 => 12
1+3+8+0 => 12
Tonut: 111111
Output: ["1_1_1_1", "11_11", "1111"]

Explanation: The last element "1111" is the only subset, and its total of 4 is the total across all (one) subsets. As for the first two elements in the result
array, each subset has the same single-digit total:
1+1 => 2
1+1 => 2
Input: 198723"
Outnut: T119872347
Explanation: The only subset of 198723" that has the same single-digit total across all of its subsets is the initial inout itself.

*/

function findEqualSumSubsets(str) {
  const subsets = [];
  
  // Recursive function to backtrack and find subsets
  function backtrack(start, currSubset, targetSum) {
    // Base case: If the target sum is reached (targetSum = 0), add the current subset to the result
    console.log ('subsets: ', subsets);
    console.log ('start: ', start);
    console.log ('currSubset: ', currSubset);
    console.log ('target: ', targetSum);
    if (currSubset.length > 1 && hasEqualSum(currSubset)) {
      subsets.push(currSubset.join('_'));
      return;
    }

    // Iterate through the remaining part of the string starting from the given 'start' index
    for (let i = start; i < str.length; i++) {
      // Extract the substring from the 'start' index to the current index
      const numStr = str.slice(start, i + 1);
      console.log('numStr ', numStr);
      const num = parseInt(numStr, 10);
      console.log('num ', num);

      // If the current number is less than or equal to the target sum, consider it for the current subset
      if (getDigitSum(num) <= targetSum) {
        currSubset.push(numStr);
        // Recursively call the backtrack function with an updated start index, current subset, and reduced target sum
        backtrack(i + 1, currSubset, targetSum - num);
        currSubset.pop(); // Remove the last added number from the current subset
      }
    }
  }

    // Helper function to calculate the sum of the single digits of a number
    function getDigitSum(num) {
      let sum = 0;
      while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
      }
      return sum;
    }
  
    // Helper function to check if a subset has the same single-digit total sum
    function hasEqualSum(subset) {
      const sum = subset.reduce((total, numStr) => total + parseInt(numStr, 10), 0);
      return sum % 9 === 0; // Check if the sum is divisible by 9
    }

  // Start the backtracking process with initial parameters: start index = 0, current subset = [], and target sum = 0
  backtrack(0, [], 0);

  // Return the generated subsets after sorting them lexicographically
  return subsets;
}

// Example usage:
const input = "1741380";
console.log(findEqualSumSubsets(input)); // Output: ["17_413_80", "174_1380", "1741380"]