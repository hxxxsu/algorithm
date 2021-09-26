let input = require('fs')
  .readFileSync('baekjoon/testcase/7/1157.txt', 'utf-8')
  .split('')
  .map(x => x.toUpperCase());

let result = {};
input.forEach(x => {
  result[x] = (result[x] || 0) + 1;
});
