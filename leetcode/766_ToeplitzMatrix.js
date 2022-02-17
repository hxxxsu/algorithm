/**
 * @param {number[][]} M
 * @return {boolean}
 */
var isToeplitzMatrix = function (M) {
  const rLen = M.length - 1;
  const cLen = M[0].length - 1;

  for (let i = 0; i < rLen; i++)
    for (let j = 0; j < cLen; j++) if (M[i][j] !== M[i + 1][j + 1]) return false;

  return true;
};

console.log(
  isToeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2]
  ])
);
