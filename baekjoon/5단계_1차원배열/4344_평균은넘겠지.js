const input = require('fs')
  .readFileSync('baekjoon/testcase/5/4344.txt', 'utf-8')
  .split('\n');

let text = '';

for (let i = 1; i < input.length; i++) {
  let arr = input[i].split(' ').map(Number);
  arr = arr.filter(function (item) {
    return item !== toRemove;
  });
  let sum = arr.reduce((a, b) => a + b);
  let avg = sum / arr.length;
  text += `${((arr.filter(x => x > avg).length / arr.length) * 100).toFixed(
    3
  )}%\n`;
}

console.log(text.trim());
