/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
  let cnt = 0;
  for (let i = 0, iLen = grid.length; i < iLen; i++) {
    let iGrid = grid.map(r => r[i]);

    const jMax = Math.max(...grid[i]);
    const iMax = Math.max(...iGrid);
    let isOneJMax = true;
    let isOneIMax = true;
    let jMaxCnt = 0;
    let iMaxCnt = 0;

    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === jMax) {
        jMaxCnt++;
      }
      if (jMaxCnt > 1) {
        isOneJMax = false;
        break;
      }
    }

    for (let i = 0; i < iGrid.length; i++) {
      if (iGrid[i] === iMax) {
        iMaxCnt++;
      }
      if (iMaxCnt > 1) {
        isOneIMax = false;
        break;
      }
    }

    cnt += jMax * 2;
    cnt += iMax * 2;

    for (let j = 0, jLen = grid[i].length; j < jLen; j++) {
      let now = grid[i][j];
      if (now) cnt += 2;
      let right = null;
      let bot = null;
      if (j < jLen - 1) {
        right = grid[i][j + 1];
        if (now > right && (now < jMax || !isOneJMax)) cnt += now - right;

        if (j > 0 && now < right) cnt += right - now;
      }
      if (i < iLen - 1) {
        bot = grid[i + 1][j];
        if (now > bot && (now < iMax || !isOneIMax)) cnt += now - bot;
        if (i > 0 && now < bot) cnt += bot - now;
      }
    }
  }
  return cnt;
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
