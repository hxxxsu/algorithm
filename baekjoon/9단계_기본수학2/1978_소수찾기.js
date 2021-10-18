let input = require('fs')
  .readFileSync('baekjoon/testcase/9/1978.txt', 'utf8')
  .split('\n')
  .slice(1)[0]
  .split(' ')
  .map(Number);

let cnt = 0;

input.forEach(n => {
  let left = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      left++;
    }
  }
  if (left === 2) {
    cnt++;
  }
});

console.log(cnt);

//숏코딩
// console.log(
//   require('fs')
//     .readFileSync('baekjoon/testcase/9/1978.txt', 'utf8')
//     .split(/\s+/)
//     .slice(1)
//     .map(Number)
//     .filter(x => {
//       if (x === 1) return;
//       for (let i = 2; i <= x / 2; i++) {
//         if (x % i === 0) return;
//       }
//       return true;
//     }).length
// );
