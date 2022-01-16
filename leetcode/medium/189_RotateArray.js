/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const len = nums.length;
  k %= len;
  nums.unshift(...nums.splice(len - k, k));
  console.log(nums);
};

rotate([1, 2], 5);
