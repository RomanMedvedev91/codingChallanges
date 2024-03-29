/*
Given an array of integers, our task is to write a program that efficiently finds the second-largest element present in the array. 

Example:

Input: arr[] = {12, 35, 1, 10, 34, 1}
Output: The second largest element is 34.
Explanation: The largest element of the 
array is 35 and the second 
largest element is 34

Input: arr[] = {10, 5, 10}
Output: The second largest element is 5.
Explanation: The largest element of 
the array is 10 and the second 
largest element is 5

Input: arr[] = {10, 10, 10}
Output: The second largest does not exist.
Explanation: Largest element of the array 
is 10 there is no second largest element
*/

function findSecondLarge(arr) {
  if (arr.length < 1) return 'arr is small';
  return arr.sort((a, b) => b - a)[1];
}

// Time Complexity: O(n log n).
// Auxiliary space: O(1).
console.log(findSecondLarge([12, 35, 1, 10, 34, 1]));


