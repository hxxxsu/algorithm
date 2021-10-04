let [a, b, c] = require('fs')
  .readFileSync('baekjoon/testcase/8/1712.txt', 'utf8')
  .split(' ')
  .map(Number);
// console.log('고정 비용 a:', a);
// console.log('생산 비용 b:', b);
// console.log('판매 비용 c:', c);
// console.log('판매비 - 생산비', c - b);
// console.log('고정비 / (판매비 - 생산비)', a / (c - b));

if (c <= b) console.log(-1);
else console.log(Math.floor(a / (c - b)) + 1);
