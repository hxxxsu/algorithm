// ~~ 연산자는 Math.floor() 와 같은 기능을 한다.
// 하지만 틸트연산자는 음수일때 -1을 하지 않는다.

let a = 123.4567;
console.log(~~a);
// => 123

let b = -53.393;

console.log(~~b);
// => -53

console.log(Math.floor(b));
// => -54
