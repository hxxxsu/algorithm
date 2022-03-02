/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    if (nums[left] !== val) left++;
    else {
      nums[left] = nums[right--];
    }
  }
  return left;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
