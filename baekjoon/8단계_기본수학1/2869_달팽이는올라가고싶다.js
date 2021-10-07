// let [a, b, v] = require('fs')
//   .readFileSync('baekjoon/testcase/8/2869.txt', 'utf8')
//   .split(' ')
//   .map(Number);

// let cnt = 1;
// let acc = 0;
// while (true) {
//   acc += a;
//   if (acc >= v) {
//     console.log(cnt);
//     return;
//   }
//   acc -= b;
//   cnt++;
// }

let [a, b, v] = require('fs')
  .readFileSync('baekjoon/testcase/8/2869.txt', 'utf8')
  .split(' ')
  .map(Number);
console.log('정상높이 - 미끄러지는거리', v - b);
console.log('하루거리 - 미끄러지는 거리', a - b);
console.log(Math.ceil((v - b) / (a - b)));
