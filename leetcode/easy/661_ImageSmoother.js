const isValid = (r, c, rows, cols) => r < rows && r >= 0 && c < cols && c >= 0;
/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  let rLen = img.length,
    cLen = img[0].length;
  let ret = new Array(rLen).fill(0).map(_ => new Array(cLen).fill(0));

  console.log(ret);

  img.forEach((row, ri) => {
    row.forEach((col, ci) => {
      let cnt = 0;
      for (let x of [-1, 0, 1])
        for (let y of [-1, 0, 1])
          if (isValid(ri + x, ci + y, rLen, cLen)) {
            cnt++;
            ret[ri][ci] += img[ri + x][ci + y];
          }
      ret[ri][ci] = Math.floor(ret[ri][ci] / cnt);
    });
  });
  return ret;
};

let test1 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];

let test2 = [
  [100, 200, 100],
  [200, 50, 200],
  [100, 200, 100]
];

console.log(imageSmoother(test2));
