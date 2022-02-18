/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  return grid.flat().filter(item => item < 0).length;
};

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3]
  ])
);
