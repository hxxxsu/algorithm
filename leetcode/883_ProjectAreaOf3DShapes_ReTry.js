/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  let bottom = 0,
    left = 0,
    right = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j]) bottom++;
    }
    left += Math.max(...grid[i]);
    right += Math.max(...grid.map(r => r[i]));
  }

  return bottom + left + right;
};

console.log(
  projectionArea([
    [1, 2],
    [3, 4]
  ])
);
