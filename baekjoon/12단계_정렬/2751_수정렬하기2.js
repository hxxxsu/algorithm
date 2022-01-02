// trim 안붙히면 틀림 2750 문제와 똑같음
// let input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
let input = `5
5
2
3
4
1`.split('\n');
input.shift();
console.log(
  input
    .map(Number)
    .sort((a, b) => a - b)
    .join('\n')
);
