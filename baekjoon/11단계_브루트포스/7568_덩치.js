// const input = require('fs').readFileSync(0, 'utf8').split('\n');
// const input = ['5', '55 185', '58 183', '88 186', '60 175', '46 155'];
// let N = input.shift();
// let text = [];
// for (let i = 0; i < N; i++) {
//   let [x, y] = input[i].split(' ').map(Number);
//   let rank = 1;
//   for (let j = 0; j < N; j++) {
//     if (j == i) continue;
//     let [p, q] = input[j].split(' ').map(Number);
//     if (x < p && y < q) rank++;
//   }
//   text.push(rank);
// }
// console.log(text.join(' '));

// 개선
const input = ['5', '55 185', '58 183', '88 186', '60 175', '46 155']
  .filter((e, i) => i > 0)
  .map(e => e.split(' ').map(v => Number(v)));
const result = input.map(e => input.filter(v => v[0] > e[0] && v[1] > e[1]).length + 1);
console.log(result.join());
