// 아래 방식으로 하면 오류남.
console.log(
  Math.ceil((+require('fs').readFileSync('baekjoon/testcase/8/2292.txt', 'utf8') - 1) / 6) + 1
);

// 아래처럼 해야됨
let n = +require('fs').readFileSync(0, 'utf8');
let c = 1,
  i = 1;
while (i < n) i += c++ * 6;
console.log(c);
