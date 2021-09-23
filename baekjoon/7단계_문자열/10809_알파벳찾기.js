const input = require('fs').readFileSync(
  'baekjoon/testcase/7/10809.txt',
  'utf-8'
);
let arr = input.split('').map(x => x.charCodeAt());
let text = [];
for (let i = 97; i <= 122; i++) {
  text.push(arr.indexOf(i));
}
console.log(text.join(' '));

//숏코딩
const input = require('fs').readFileSync('/dev/stdin').toString();
let result = [];
for (let i = 97; i <= 122; i++) {
  result.push(input.indexOf(String.fromCharCode(i)));
}
console.log(result.join(' '));
