// const n = +require('fs').readFileSync(0, 'utf8');
const n = 21;
const pi = Math.PI;
// 유클리드 기하학에서 원의 넓이는 PI * r^2 이다.
console.log(pi * Math.pow(n, 2));
// 택시 기하학에서 원의 넓이는 2 * r^2 이다
console.log(2 * Math.pow(n, 2));
