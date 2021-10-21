// let [m, n] = require('fs')
//   .readFileSync('baekjoon/testcase/9/1929.txt', 'utf8')
//   .split(' ')
//   .map(Number);
// var range = [...Array(n - m + 1)].map((v, i) => m + i);
// console.log(
//   range
//     .filter(x => {
//       if (x === 1) return;
//       for (let i = 2; i <= x / 2; i++) {
//         if (x % i === 0) return;
//       }
//       return true;
//     })
//     .join('\n')
// );

// 위 방법은 시간 초과됨
// 에라토스테네스의 체: 2부터 끝 숫자의 제곱근까지 보며 값이 있으면 그 값을 제외하고 그값의 배수들을 모두 false시킴
const [n, m] = require('fs')
  .readFileSync('baekjoon/testcase/9/1929.txt', 'utf8')
  .split(' ')
  .map(Number);

const arr = Array.from(Array(m + 1).keys());
for (let i = 2; i <= Math.sqrt(m); i++) {
  if (arr[i]) for (let j = i * i; j <= m; j += i) arr[j] = false;
}
arr.splice(0, 2, false, false);
for (let i = n; i <= m; i++) {
  if (arr[i]) console.log(arr[i]);
}
