/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  let i = k % (grid.length * grid[0].length);
  let res = grid.flat();
  for (let index = 0; index < i; index++) res.unshift(res.pop());
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j] = res.shift();
    }
  }

  return grid;
};

console.log(
  shiftGrid(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ],
    1
  )
);
