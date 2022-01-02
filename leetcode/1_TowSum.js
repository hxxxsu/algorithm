//https://leetcode.com/problems/two-sum/submissions/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0, len = nums.length; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (target - nums[i] === nums[j] && i != j) return [i, j];
    }
  }
};

console.log(twoSum([3, 2, 4], 6));
