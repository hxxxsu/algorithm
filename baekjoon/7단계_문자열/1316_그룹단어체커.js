let s = require('fs').readFileSync('baekjoon/testcase/7/1316.txt', 'utf8').split('\n');

let cnt = s[0];

for (let i = 1; i <= s[0]; i++) {
  let strings = [];
  for (c of s[i]) {
    if (strings.includes(c)) {
      if (strings[strings.length - 1] !== c) {
        cnt--;
        break;
      }
    } else {
      strings.push(c);
    }
  }
}

console.log(cnt);
