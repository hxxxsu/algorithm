const fs = require('fs');
const input = fs
  .readFileSync('baekjoon/testcase/5/2562.txt', 'utf-8')
  .split('\n')
  .map(Number);
let max = Math.max(...input);
console.log(`${max}\n${input.indexOf(max) + 1}`);
