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

var removeElement2 = function(nums, val) {
    const arr = nums.filter(num => num != val)
    nums.forEach((_, i) => nums[i] = arr[i])
    return arr.length
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeElement2([0, 1, 2, 2, 3, 0, 4, 2], 2));