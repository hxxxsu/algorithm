let s = require('fs').readFileSync('baekjoon/testcase/7/2941.txt', 'utf8').trim();
let arr = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

let cnt = 0;
while (s.length > 0) {
  let isOne = true;
  arr.forEach(data => {
    if (s.startsWith(data)) {
      s = s.substr(data.length, s.length);
      isOne = false;
      cnt++;
      return;
    }
  });
  if (isOne) {
    s = s.substr(1, s.length);
    cnt++;
  }
}

console.log(cnt);

//숏코딩
const s = require('fs').readFileSync('baekjoon/testcase/7/2941.txt', 'utf8').trim();
let a = s.replace(/c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g, ' ');

console.log(a, a.length);
