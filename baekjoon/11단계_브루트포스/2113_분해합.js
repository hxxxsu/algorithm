// const input = +require('fs').readFileSync(0, 'utf8');
const input = 1000000;

// 짧은 코드
for (let i = 1; i <= input; i++) {
  if (
    i +
      ('' + i)
        .split('')
        .map(Number)
        .reduce((a, b) => a + b) ===
    input
  )
    return console.log(i);
}
console.log(0);

// // 보기 편한 코드
// for (let i = 1; i <= input; i++) {
//   let arr = new String(i).split(''),
//     ret = i + arr.map(Number).reduce((a, b) => a + b);
//   if (ret === input) return console.log(i);
// }
// console.log(0);
