// let a = +require('fs').readFileSync(0, 'utf8');
let input = 10;

let arr = [];

for (let i = 0; i <= input; i++) {
  if (i < 2) {
    arr.push(i);
    continue;
  }

  arr.push(arr[i - 1] + arr[i - 2]);
}

console.log(arr[arr.length - 1]);

///////////////////
// const fibo = n => {
//   let test = n <= 1 ? n : fibo(n - 1) + fibo(n - 2);
//   console.log(n, 'test', test);
//   return test;
// };
// console.log(fibo(input));

///////////////////
const fibo = n => (n <= 1 ? n : fibo(n - 1) + fibo(n - 2));
console.log(fibo(input));
