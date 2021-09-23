const input = require('fs').readFileSync(
  'baekjoon/testcase/7/10809.txt',
  'utf-8'
);

console.log(input);

let arr = input.split('').map(x => x.charCodeAt());

let text = [];
for (let i = 97; i <= 122; i++) {
  text.push(arr.indexOf(i));
}

console.log(text);
