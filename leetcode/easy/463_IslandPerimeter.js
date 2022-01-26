/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let sum = 0;
  grid.forEach((row, ri) => {
    row.forEach((cal, ci) => {
      if (cal) {
        let side = 4;
        if (ri && grid[ri - 1][ci]) side -= 1;
        if (ri < grid.length - 1 && grid[ri + 1][ci]) side -= 1;
        if (ci && grid[ri][ci - 1]) side -= 1;
        if (ci < row.length - 1 && grid[ri][ci + 1]) side -= 1;
        sum += side;
      }
    });
  });
  return sum;
};

islandPerimeter([
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0]
]);
