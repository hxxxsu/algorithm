/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let cArr = x.toString().split('');
  let midIdx = ~~(cArr.length / 2);
  let lNums = cArr.splice(0, midIdx);
  let rNums = cArr.reverse();
  return lNums.find((ln, i) => ln !== rNums[i]) ? false : true;
};

console.log(isPalindrome(1233321));
