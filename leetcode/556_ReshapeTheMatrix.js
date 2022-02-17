/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  let arr = mat.flat();
  if (arr.length != r * c) return mat;
  let ret = [];
  while (arr.length) ret.push(arr.splice(0, c));
  return ret;
};

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4]
    ],
    1,
    4
  )
);
