/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
  let n = grid.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let current = grid[i][j];
      // 기둥 단위로 계산하기 위해 기둥 높이에 4를 곱하여 4면과 위 아래 2를 더하여 기둥의 총 면을 구함
      if (current !== 0) res += current * 4 + 2;
      // 기둥의 총 면에서 앞 뒤 위 아래로 겹쳐지는 면이 있는 경우 제거함.
      if (i !== 0) res -= Math.min(current, grid[i - 1][j]);
      if (j !== 0) res -= Math.min(current, grid[i][j - 1]);
      if (i !== n - 1) res -= Math.min(current, grid[i + 1][j]);
      if (j !== n - 1) res -= Math.min(current, grid[i][j + 1]);
    }
  }
  return res;
};

console.log(
  surfaceArea([
    [1, 2],
    [3, 4]
  ])
);

console.log(
  surfaceArea([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ])
);

console.log(
  surfaceArea([
    [2, 2, 2],
    [2, 1, 2],
    [2, 2, 2]
  ])
);

console.log(
  surfaceArea([
    [1, 0],
    [0, 2]
  ])
);

console.log(
  surfaceArea([
    [2, 1],
    [1, 2]
  ])
);
