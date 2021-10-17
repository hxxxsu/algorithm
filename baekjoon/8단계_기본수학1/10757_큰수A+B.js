// const [A, B] = require('fs')
//   .readFileSync('baekjoon/testcase/8/10757.txt', 'utf8')
//   .split(' ')
//   .sort((a, b) => {
//     return b.length - a.length;
//   });

// let arr = [];
// let bit = 0;
// let i = 0;

// while (i < A.length) {
//   let a = +A[A.length - 1 - i],
//     b = 0;
//   if (A.length === B.length || i + 1 < B.length) {
//     b = +B[B.length - 1 - i];
//   }

//   c = a + b + bit;
//   if (c >= 10) {
//     arr.unshift(c - 10);
//     bit = 1;
//   } else {
//     arr.unshift(c);
//     bit = 0;
//   }

//   if (i + 1 === A.length && bit) {
//     arr.unshift(bit);
//   }
//   i++;
// }

// console.log(arr.join(''));

let input = require('fs').readFileSync('baekjoon/testcase/8/10757.txt', 'utf8').split(' ');
const A = BigInt(input[0]);
const B = BigInt(input[1]);
let answer = A + B;
console.log(answer.toString());
