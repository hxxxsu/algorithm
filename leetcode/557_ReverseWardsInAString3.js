/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function (s) {
  return s
    .split(' ')
    .map(item => item.split('').reverse().join(''))
    .join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"));
