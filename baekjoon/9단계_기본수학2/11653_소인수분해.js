let n = +require('fs').readFileSync('baekjoon/testcase/9/11653.txt', 'utf8');

if (n === 1) return;

let cnt = 2;
let arr = [];

while (true) {
  while (true) {
    if (n % cnt === 0) {
      n /= cnt;
      arr.push(cnt);
      break;
    } else if (n < cnt) {
      console.log(arr.join('\n'));
      return;
    }
    cnt++;
  }
}

//숏코딩
// let n = +require('fs').readFileSync('baekjoon/testcase/9/11653.txt', 'utf8');

// for (let i = 2; i <= n; i++) {
//   while (n % i == 0) {
//     n /= i;
//     console.log(i);
//   }
// }
