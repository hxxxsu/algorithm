/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let cArr = x.toString().split('');
  let lNums = [],
    rNums = [];
  if (cArr.length % 2 === 0) {
    //짝수
  } else {
    //홀수

    const midIdx = cArr[~~(cArr.length / 2)];
    console.log(midIdx);
    lNums = cArr.splice(0, midIdx);
    lNums.pop();
    rNums = cArr.reverse();
  }

  return lNums.find((ln, i) => ln !== rNums[i]) ? false : true;
};

console.log(isPalindrome(1234321));
