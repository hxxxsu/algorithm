/**
 * @param {number[]} nums
 * @return {number}
 */
// 파라미터로 받은 nums는 정렬하고 중복되는 값의 수를 리턴
var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] != nums[j]) nums[++i] = nums[j];
  }
  return  i + 1;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(test([1, 1, 2]));
