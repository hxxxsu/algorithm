const fs = require('fs');
let input = fs
  .readFileSync('baekjoon/testcase/5/10818.txt')
  .toString()
  .split('\n');

let arr = input[1].split(' ');

let min = 0;
let max = 0;

for (i = 0; i < arr.length; i++) {
  console.log(i, 'min:', min, 'max:', max);
  if (min === 0 || min > arr[i]) {
    min = arr[i];
    console.log('min:', min);
  }
  if (max === 0 || max < arr[i]) {
    max = arr[i];
    console.log('max:', min);
  }
}
console.log('====');
console.log(min, max);
console.log(arr);

// 자바스크립트 표준에는 함수에 전달할 수 있는 인자의 개수에 제한이 없지만, 실제 구현에서는 제한이 있을 수 있다.
// arr에 담기는 인자의 수가 최대 1,000,000 개이므로 런타임 에러가 발생한다
// https://help.acmicpc.net/judge/rte
//console.log(`${Math.max(...arr)} ${Math.min(...arr)}`);
