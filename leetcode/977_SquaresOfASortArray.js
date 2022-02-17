/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  return nums.map(n => n * n).sort((a, b) => a - b);
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
