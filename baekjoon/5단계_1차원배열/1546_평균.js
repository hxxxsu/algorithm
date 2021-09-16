const fs = require('fs');
const input = fs
  .readFileSync('baekjoon/testcase/5/1546.txt', 'utf-8')
  .split('\n');
const arr = input[1].split(' ').map(Number);
const M = Math.max(...arr);
const avg = arr.map(x => (x / M) * 100).reduce((a, b) => a + b) / arr.length;
console.log(avg);

//스페셜 저지: 문제의 정답이 여러가지인 경우에는 스페셜 저지로 채점을 하게 됩니다. 스페셜 저지는 유저가 출력한 답을 검증하는 코드를 통해서 정답 유무를 결정하는 방식입니다.
