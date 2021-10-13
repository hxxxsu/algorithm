let s = require('fs').readFileSync('baekjoon/testcase/8/10250.txt', 'utf8').split('\n');
console.log(s);
for (let i = 1; i <= s[0]; i++) {
  const [H, W, N] = s[i].split(' ').map(Number);
  console.log(H, W, N);
}
