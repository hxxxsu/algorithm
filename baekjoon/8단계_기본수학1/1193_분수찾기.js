// let n = +require('fs').readFileSync(0, 'utf8');

// 코드 줄이기
// let n = +require('fs').readFileSync('baekjoon/testcase/8/1193.txt', 'utf8'),
//   c = 1;
// for (let i = 1; i <= n; i++) {
//   let k = i;
//   for (let j = 1; j <= i; j++) {
//     if (n == c) {
//       console.log(i % 2 == 0 ? `${j}/${k}` : `${k}/${j}`);
//       return;
//     }
//     c++;
//     k--;
//   }
// }

// 숏코딩 따라하기
// let n = +require('fs').readFileSync('baekjoon/testcase/8/1193.txt', 'utf8'),
//   i = 1,
//   s = 0;
// while (true) {
//   console.log('==========');
//   console.log('i', i);
//   console.log('s', s);
//   console.log('n', n);
//   s += i;
//   if (n <= s) break;
//   i++;
// }
// console.log(i % 2 == 0 ? `${i - s + n}/${s - n + 1}` : `${s - n + 1}/${i - s + n}`);

// 총 정리
let n = +require('fs').readFileSync('baekjoon/testcase/8/1193.txt', 'utf8'),
  i = 1,
  s = 0;
while (true) {
  s += i;
  if (n <= s) break;
  i++;
}
console.log(i % 2 == 0 ? `${i - s + n}/${s - n + 1}` : `${s - n + 1}/${i - s + n}`);
