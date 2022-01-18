//https://velog.io/@lychee/LeetCode-167.-Two-Sum-II
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let lIdx = 0;
  let rIdx = numbers.length - 1;
  let sum;
  while (lIdx < rIdx) {
    sum = numbers[lIdx] + numbers[rIdx];
    if (sum === target) return [lIdx + 1, rIdx + 1];
    else if (sum < target) lIdx++;
    else rIdx--;
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
