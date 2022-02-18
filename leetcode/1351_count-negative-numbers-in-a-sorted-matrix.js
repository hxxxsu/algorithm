/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    let cnt=0
    grid.forEach(row=>{
        cnt+=row.filter(col=>col<0).length
    })
    return cnt
};

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3]
  ])
);
