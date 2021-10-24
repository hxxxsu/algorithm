let input = require('fs')
  .readFileSync('baekjoon/testcase/9/9020.txt', 'utf8')
  .split('\n')
  .slice(1)
  .map(Number);

console.log(input);

for (x of input) {
  console.log(x);
}
