// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let number = Number(input[0]);
// input.shift();

// let k;
// let n;
// let array = [];

// for (let i = 0; i < number * 2; i = i + 2) {
//   k = Number(input[i]);
//   n = Number(input[i + 1]);
//   array.push([k, n]);
// }

// let floor = [];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   //k층 n호
//   k = array[i][0];
//   n = array[i][1];
//   for (let j = 0; j <= k; j++) {
//     //0층부터 k층까지
//     floor[j] = [];
//     for (let m = 1; m <= n; m++) {
//       // 1호부터 n호까지
//       if (j === 0) {
//         //0층이라면
//         floor[j].push(m);
//       } else {
//         // j가 0이 아닐 때
//         sum += floor[j - 1][m - 1];
//         floor[j].push(sum);
//         if (m === n) {
//           sum = 0;
//         }
//       }
//     }
//   }
//   console.log(floor[k][n - 1]);
// }

//숏코딩
const input = (require('fs').readFileSync('baekjoon/testcase/8/2775.txt') + '').trim().split('\n');

for (let i = 1; i <= 2 * input[0]; ) {
  console.log(ans(Number(input[i++]), Number(input[i++])));
}

function ans(k, n) {
  if (k === 0) return n;
  let sum = 0;
  for (let i = 1; i <= n; ) sum += ans(k - 1, i++);
  return sum;
}
