/**
 * @param {number} x
 * @return {number}
 * 제곱근 구하기.
 * 문제의 조건상 소수점까지 정확히 출력할 필요 없으므로,
 * sq*sq 값이 입력받은 x 보다 클 경우에 sq-1을 리턴한다.
 * 시간복잡도는 O(n)이다.
 */
var mySqrt = function (x) {
  let sq = 1;
  while (true) {
    if (x < sq * sq) return sq - 1;
    sq++;
  }
};

console.log(mySqrt(8));

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
