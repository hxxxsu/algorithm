const eratos = (x, y) => {
  let arr = [];
  for (let i = 2; i <= y; i++) {
    arr[i] = i;
  }
  for (let i = 2; i <= y; i++) {
    if (arr[i] === 0) continue;
    for (let j = i + i; j <= y; j += i) {
      arr[j] = 0;
    }
  }
  return arr.filter(n => n > 0);
};

let input = require('fs')
  .readFileSync('baekjoon/testcase/9/9020.txt', 'utf8')
  .split('\n')
  .slice(1)
  .map(Number);

for (x of input) {
  let arr = eratos(2, x);
  let rightMid = Math.ceil(arr.length / 2);
  let leftMid = Math.ceil(arr.length / 2) - 1;

  while (true) {
    let left = arr[leftMid];
    let right = arr[rightMid];

    if (x / 2 === left) {
      console.log(left, left);
      break;
    }
    if (x / 2 === right) {
      console.log(right, right);
      break;
    }

    if (left + right === x) {
      console.log(left, right);
      break;
    }

    if (left + right < x) {
      rightMid++;
    } else if (left + right > x) {
      leftMid--;
    }
  }
}
