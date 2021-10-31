let input = require('fs').readFileSync('baekjoon/testcase/9/3009.txt', 'utf8').split('\n');
let xArr = [];
let yArr = [];
for (let str of input) {
  let [x, y] = str.split(' ');
  xArr.push(x);
  yArr.push(y);
}
