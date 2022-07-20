/*
Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
[
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1]
]

[
  [2, 2, 2],
  [2, 2, 0],
  [2, 0, 1]
]
Example 2:

Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
Output: [[0,0,0],[0,0,0]]
Explanation: The starting pixel is already colored 0, so no changes are made to the image.
*/

const floodFill = function (image, sr, sc, color) {
  const colorPixel = image[sr][sc];
  if (colorPixel === color) return image;

  const deepSearch = (image, sr, sc) => {
    if (sr < 0 || sr === image.length) return;
    if (sc < 0 || sc === image[0].length) return;
    if (image[sr][sc] !== colorPixel) return;

    image[sr][sc] = color;

    deepSearch(image, sr - 1, sc); // up
    deepSearch(image, sr + 1, sc); // down
    deepSearch(image, sr, sc + 1); // right
    deepSearch(image, sr, sc - 1); //left

    return image;
  };

  return deepSearch(image, sr, sc);
};

module.exports = floodFill;
