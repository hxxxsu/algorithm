/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (M) {
  return M.map(row => row.map(col => (col === 0 ? 1 : 0)).reverse());
};

const image = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0]
];

console.log(flipAndInvertImage(image));
