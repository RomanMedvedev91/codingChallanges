/*
Given an array of random numbers, Push all the zero’s of a given array to the end of the array. For example, if the given arrays is {1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0}, it should be changed to {1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0}. The order of all other elements should be same. Expected time complexity is O(n) and extra space is O(1).

Example: 

Input :  arr[] = {1, 2, 0, 4, 3, 0, 5, 0};
Output : arr[] = {1, 2, 4, 3, 5, 0, 0, 0};

Input : arr[]  = {1, 2, 0, 0, 0, 3, 6};
Output : arr[] = {1, 2, 3, 6, 0, 0, 0};
*/

function moveAllZeroesToEnd (arr, n) {
//   let A = [5, 6, 0, 4, 6, 0, 9, 0, 8];
//   let n = A.length;
//   let j = 0;
//   for (let i = 0; i < n; i++) {
//       if (A[i] != 0) {
//           //   Swap - A[j] , A[i]
//           swap(A, j, i); // Partitioning the array
//           j++;
//       }
//   }
//   for (let i = 0; i < n; i++) {
//       document.write(A[i] + " "); // Print the array
//   }
// }
// function swap(A, a, b) {
//   let temp = A[a];
//   A[a] = A[b];
//   A[b] = temp;
}

let arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
let n = arr.length;
// moveAllZeroesToEnd(arr, n);
console.log(moveAllZeroesToEnd(arr, n));