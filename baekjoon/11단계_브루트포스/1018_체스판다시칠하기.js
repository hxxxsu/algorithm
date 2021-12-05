const input = require('fs').readFileSync('baekjoon/testcase/11/1018.txt', 'utf8').split('\n');
const [N, M] = input.shift().split(' ').map(Number);
console.log(N, M, input);

for (let i = 0; i < N; i++) {
  console.log(input[i]);
}
