/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (M) {
  // 행열의 길이를 변수로 저장한다
  let rows = M.length,
    cols = M[0].length;

  // 입력받은 매트릭스와 같은 크기의 빈 매트릭스를 생성한다.
  let ret = new Array(rows).fill(0).map(_ => new Array(cols).fill(0));

  for (let r = 0; r < rows; ++r) {
    for (let c = 0; c < cols; ++c) {
      // 카운터 셋팅
      let count = 0;
      console.log('================');
      for (let x of [-1, 0, 1])
        for (let y of [-1, 0, 1]) {
          if (isValid(r + x, c + y, rows, cols)) {
            count++;
            console.log('------');
            console.log(`r:${r} c:${c} x:${x} y:${y}`);
            console.log(`M[${r + x}][${c + y}]`, M[r + x][c + y]);
            console.log(`ret[${r}][${c}] 기존값:${ret[r][c]}`);

            ret[r][c] += M[r + x][c + y];
          }
        }
      console.log(`${ret[r][c]}/${count} = ${Math.floor(ret[r][c] / count)}`);
      ret[r][c] = Math.floor(ret[r][c] / count);
    }
  }

  console.log(M);
  console.log(ret);
  return ret;
};

const isValid = (r, c, rows, cols) => r < rows && r >= 0 && c < cols && c >= 0;

let test2 = [
  [100, 200, 100],
  [200, 50, 200],
  [100, 200, 100]
];

console.log(imageSmoother(test2));

let test1 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];
