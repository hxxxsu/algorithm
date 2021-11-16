const input = ['5 21', '5 6 7 8 9'];
const M = [];
let arr = input
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);
console.log(arr);

let sum = 0;

let answer = [0, 1, 2];

while (M != sum) {
  sum = arr[answer[0]] + arr[answer[1]] + arr[answer[2]];
  i;
}
