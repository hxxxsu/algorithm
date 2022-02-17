/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
  let res = [];
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      let diff = Math.abs(x - rCenter) + Math.abs(y - cCenter);
      if(!res[diff]) res[diff] = [];
      res[diff].push([x,y])
    }
  }


  return res.flat();
};

const testCases = [
  //   [1, 2, 0, 0]
  //   [2, 2, 0, 1],
  [2, 3, 1, 2]
];

testCases.forEach(tc => {
  console.log(allCellsDistOrder(...tc));
});
