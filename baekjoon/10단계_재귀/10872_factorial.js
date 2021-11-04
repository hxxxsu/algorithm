/** factorial(=팩토리얼,팩,계승) 그 수보다 작거나 같은 모든 양의 정수의 곱 이다
즉, 3! = 1*2*3 = 6 */

// const input = +require('fs').readFileSync(0, 'utf8');
// const input = 2;
// if (input < 2) {
//   console.log(1);
//   return;
// }
// console.log(
//   Array(...Array(input).keys())
//     .map(x => x + 1)
//     .reduce((a, b) => a * b)
// );

// 코드개선 (재귀)
let a = 10;

function fact(n) {
  if (n < 2) return 1;
  return n * fact(n - 1);
}

console.log(fact(a));
