// const input = ['10 500', '93 181 245 214 315 36 185 138 216 295'];
const input = ['5 21', '5 6 7 8 9'];
// const input=require('fs').readFileSync(0,'utf8').split('\n'),
(NM = input.shift().split(' ').map(Number)),
  (N = NM.shift()),
  (M = NM.shift()),
  (cards = input.shift().split(' ').map(Number));
let max = 0;
for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      let sum = cards[i] + cards[j] + cards[k];
      if (sum > max && sum <= M) {
        max = sum;
      }
    }
  }
}
console.log(max);
