// .readFileSync('baekjoon/3단계_for문/testcase/11021.txt')
const n = require('fs').readFileSync('dev/stdin').toString().split('\n');
let arr = [];
for (let i = 1; i <= n[0]; i++) {
  arr.push(
    `Case #${i}: ${n[i]
      .split(' ')
      .map(Number)
      .reduce((a, b) => a + b)}`
  );
}
console.log(`${arr.join('\n')}`);
