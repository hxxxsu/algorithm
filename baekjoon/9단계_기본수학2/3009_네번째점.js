let input = require('fs').readFileSync('baekjoon/testcase/9/3009.txt', 'utf8').split('\n');
let xObj = {},
  yObj = {};
for (const str of input) {
  let [x, y] = str.split(' ');
  xObj[x] ? xObj[x]++ : (xObj[x] = 1);
  yObj[y] ? yObj[y]++ : (yObj[y] = 1);
}
console.log(
  Object.keys(xObj).find(key => xObj[key] === 1),
  Object.keys(yObj).find(key => yObj[key] === 1)
);

// 코드개선

let X = 0,
  Y = 0;

require('fs')
  .readFileSync('baekjoon/testcase/9/3009.txt', 'utf8')
  .split('\n')
  .forEach(line => {
    const [x, y] = line.split(' ').map(Number);
    X ^= x;
    Y ^= y;
    console.log(X, Y);
  });

console.log(X, Y);
