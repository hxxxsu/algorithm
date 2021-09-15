const fs = require('fs');
const input = fs.readFileSync('baekjoon/testcase/4/1110.txt').toString().trim();
let addN = 0;
let count = 0;
let N = +input;
let isNotSame = true;
while (isNotSame) {
  addN = Math.floor(N / 10) + (N % 10);
  console.log('addN', addN);
  N = (N % 10) * 10 + (addN % 10);
  console.log('N', N);
  count++;
  if (N == input) {
    console.log(count);
    isNotSame = false;
  }
}
