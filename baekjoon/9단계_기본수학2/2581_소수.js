let [M, N] = require('fs')
  .readFileSync('baekjoon/testcase/9/2581.txt', 'utf8')
  .split('\n')
  .map(Number);

let arr = [];
let retArr = [];

for (let x = M; x <= N; x++) {
  let isSosu = true;
  if (x === 1) continue;
  for (let i = 2; i <= x / 2; i++) {
    if (x % i === 0) {
      isSosu = false;
      break;
    }
  }
  if (isSosu) arr.push(x);
}

if (arr.length > 0) {
  retArr.push(
    arr.reduce((a, b) => {
      return a + b;
    })
  );
  retArr.push(arr[0]);
} else {
  retArr.push(-1);
}

console.log(retArr.join('\n'));

//숏코딩
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// const number = input.map(num => parseInt(num));

// let a = number[0];
// let b = number[1];

// let sum = 0;
// let min = 0;

// for (i = b; i >= a; i--) {
//   for (j = 2; j < i; j++) if (i % j == 0) break;

//   if (j == i) {
//     sum += i;
//     min = j;
//   }
// }
// console.log(sum == 0 ? -1 : sum + '\n' + min);
