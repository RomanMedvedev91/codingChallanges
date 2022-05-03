/* Sean invented a game involving a matrix where each cell of the matrix contains an integer. He can reverse any of its rows or columns any number of times. The goal of the game is to maximize the sum of the elements in the submatrix located in the upper-left quadrant of the matrix

Given the initial configurations for matrices, help Sean reverse the rows and columns of each matrix in the best possible way so that the sum of the elements in the matrix's upper-left quadrant is maximal.

Example
m = [[1, 2], [3, 4]
1 2
 3 4
It is 2x2 and we want to maximize the top left quadrant, a 1x1 matrix. Reverse row :
 
And now reverse column 0:
1 2 
4 3
The maximal sum is 4.

Function Description
Complete the flippingMatrix function in the editor below. flippingMatrix has the following parameters:
- int matrix[2n][2n]: a 2-dimensional array of integers


matrix = [[112, 42, 83, 119], [56, 125, 56, 49], \
          [15, 78, 101, 43], [62, 98, 114, 108]]

  Sample Output
 414

*/

function flippingMatrix(matrix) {
  let totalSum = 0;
  let length = matrix.length - 1;
  let middle = Math.floor(matrix.length / 2);

  for (let i = 0; i < middle; i++) {
    for (let j = 0; j < middle; j++) {
      totalSum += Math.max(
        matrix[i][j],
        matrix[i][length - j],
        matrix[length - i][j],
        matrix[length - i][length - j]
      );
      console.log("sum", totalSum);
      console.log(
        "itiration:",
        matrix[i][j],
        matrix[length - i][j],
        matrix[i][length - j],
        matrix[length - i][length - j]
      );
    }
  }
  return totalSum;
}

console.log(
  flippingMatrix([
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108],
  ])
);
