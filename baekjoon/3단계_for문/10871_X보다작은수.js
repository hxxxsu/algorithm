//baekjoon/3단계_for문/testcase/10871.txt
const input = require('fs').readFileSync('dev/stdin').toString().split('\n');

let x = input[0].split(' ').map(Number)[1];

console.log(
  input[1]
    .split(' ')
    .map(Number)
    .filter(num => num < x)
    .join(' ')
);

//숏코딩, 아래 코드와 같이 [iput, data]처럼 구조 분해 할당가능
//https://www.zerocho.com/category/ECMAScript/post/575d20a97d96d81700508ccd
const [input, data] = require('fs').readFileSync(0, 'utf-8').split('\n');
const [len, t] = input.split(' ').map(Number);
console.log(
  data
    .split(' ')
    .map(Number)
    .filter(i => i < t)
    .join(' ')
);
