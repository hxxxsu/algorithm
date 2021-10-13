// let s = require('fs').readFileSync('baekjoon/testcase/8/10250.txt', 'utf8').split('\n');
// for (let i = 1; i <= s[0]; i++) {
//   let arr = [];
//   const [H, W, N] = s[i].split(' ').map(Number);
//   for (let j = 1; j <= W; j++) {
//     for (let k = 1; k <= H; k++) {
//       arr.push(k * 100 + j);
//     }
//   }
//   console.log(arr[N - 1]);
// }

let s = require('fs')
  .readFileSync('baekjoon/testcase/8/10250.txt', 'utf-8')
  .trim()
  .split('\n')
  .slice(1);
for (let d of s) {
  const [h, w, n] = d.split(' ').map(Number);
  console.log(`${n % h === 0 ? h : n % h}${String(Math.ceil(n / h)).padStart(2, '0')}`);
}
