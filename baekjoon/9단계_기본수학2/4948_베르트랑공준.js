// 첫번째 시도
// let arr = require('fs')
//   .readFileSync('baekjoon/testcase/9/4948.txt', 'utf8')
//   .trim()
//   .split('\n')
//   .map(Number);

// for (let m of arr) {
//   if (m === 0) return;
//   let n = m * 2;
//   var np = Array(n + 1),
//     p = [];
//   (np[0] = 1), (np[1] = 1);
//   for (let i = 2; i <= n; i++) if (!np[i]) for (let j = i * i; j <= n; j += i) np[j] = 1;
//   for (let i = m; i <= n; i++) if (!np[i]) p.push(i);
//   console.log(p.length);
// }

// 베르트랑 공준(Bertrand Gongjoon)

// 2nd Solution

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(num => parseInt(num));

// 두번째 시도
const input = [1, 10, 13, 100, 1000, 10000, 100000, 0];
for (let num of input) {
  if (num === 0) break;

  const n = num + 1,
    m = 2 * num,
    isPrimeNumArr = new Array(m + 1);

  let counter = 0;

  isPrimeNumArr.fill(true);
  isPrimeNumArr[0] = isPrimeNumArr[1] = false;

  for (let i = 2; i <= m; i++) {
    if (Math.pow(i, 2) > 1000000) {
      break;
    } else {
      for (let square = Math.pow(i, 2); square <= m; square += i) {
        isPrimeNumArr[square] = false;
      }
    }
  }

  for (let i = n; i <= m; i++) {
    if (isPrimeNumArr[i]) {
      counter++;
    }
  }
  console.log(counter);
}
