// const input = ['10 500', '93 181 245 214 315 36 185 138 216 295'];
const input = ['5 21', '5 6 7 8 9'];
const NM = input.shift().split(' ').map(Number);
const N = NM.shift();
const M = NM.shift();
const cards = input.shift().split(' ').map(Number);

let max = 0;

for (let i = 0; i < N - 2; i++) {
  // 총카드 갯수 - 1 번 반복하는 for문
  console.log('====1====', i);
  for (let j = i + 1; j < N - 1; j++) {
    console.log('====2====', j);
    for (let k = j + 1; k < N; k++) {
      // 총카드 갯수 만큼 반복하는 for문
      console.log('====3====', k);
      console.log(cards[i], cards[j], cards[k], '=', cards[i] + cards[j] + cards[k]);
    }
  }
}
