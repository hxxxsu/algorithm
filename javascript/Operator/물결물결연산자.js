// Math.floor는 소수점 이하의 값을 버리는 함수이다.
// 단항 비트 논리부정 연산자 ~~ 는 Math.floor() 대신 사용할 수 있으며 속도도 더 빠르다.
// *하지만 음수일때 -1을 하지 않는다.

let a = 123.9;
let b = -53.9;

console.log(~~a);
// => 123

console.log(~~b);
// 음수여도 동일하게 소수점만 버림 => -53

console.log(Math.floor(b));
// 음수일때 -1을 함 => -54
