const fs = require('fs');
let input = fs
  .readFileSync('baekjoon/testcase/5/8958.txt', 'utf-8')
  .split('\n');

let text = '';
let len = +input[0];

for (let i = 1; i <= len; i++) {
  let acc = [];
  input[i].split('').forEach(y => {
    if (y === 'O') {
      if (acc.length > 0) {
        acc.push(acc[acc.length - 1] + 1);
      } else {
        acc.push(1);
      }
    } else {
      acc.push(0);
    }
  });
  text += `${acc.map(Number).reduce((a, b) => a + b)}\n`;
}
console.log(text.trim());
