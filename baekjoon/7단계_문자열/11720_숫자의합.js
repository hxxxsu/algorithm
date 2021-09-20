console.log(
  require('fs')
    .readFileSync('baekjoon/testcase/7/11720.txt', 'utf-8')
    .split('\n')[1]
    .split('')
    .map(Number)
    .reduce((a, b) => a + b)
);
