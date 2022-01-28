/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  img.forEach((row, ri) => {
    row.forEach((col, ci) => {
      let obj = {
        tl: img[ri - 1][ci - 1] || 0,
        t: img[ri - 1][ci] || 0,
        tr: img[ri - 1][ci + 1] || 0,
        l: img[ri][ci - 1] || 0,
        r: img[ri][ci + 1] || 0,
        bl: img[ri + 1][ci - 1] || 0,
        b: img[ri + 1][ci] || 0,
        br: img[ri + 1][ci + 1] || 0
      };

      console.log(obj);
    });
  });
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

imageSmoother(test2);
