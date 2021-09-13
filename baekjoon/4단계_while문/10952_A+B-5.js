// dev/stdin
const input = require('fs')
  .readFileSync('baekjoon/4단계_while문/testcase/10952.txt')
  .toString()
  .split('\n');

let notZero = true;
let i = 0;
let arr = [];

while (notZero) {
  let sum = input[i]
    .split(' ')
    .map(Number)
    .reduce((a, b) => {
      return a + b;
    });
  sum === 0 ? (notZero = false) : arr.push(`${sum}`);
  i++;
}

console.log(arr.join('\n'));

//숏코딩, 제한시간이 길기때문에 while문 안에 console.log를 출력하였다.

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let i = 0;

while (input[i][0] != 0) {
  let num = input[i].split(' ');
  console.log(Number(num[0]) + Number(num[1]));
  i++;
}
