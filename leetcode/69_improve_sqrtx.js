/**
 * @param {number} x
 * @return {number}
 * 중간 값을 구하는 방식으로
 * 시간복잡도를 감소 시키도록 개선.
 */
var mySqrt = function (x) {
  let left = 1;
  let right = ~~(x / 2) + 1;
  let mid;

  while (left <= right) {
    mid = ~~((left + right) / 2);
    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return right;
};

console.log(mySqrt(100));

// 1 => 1
// 2 => 4
// 3 => 9
// 4 => 16
// 5 => 25
// 6 => 36
// 7 => 49
// 8 => 64
// 9 => 81
// 10 => 100
