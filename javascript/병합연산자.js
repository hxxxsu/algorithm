//https://im-developer.tistory.com/192
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator

// 논리연산자 || 를 사용하면 왼쪽 값이 null, undefined, falsy값(0, 공백, false) 등일 경우 오른쪽 값을 반환하며
// 병합연산자 ?? 를 사용하면 왼쪽 값이 null, undefined일때만 오른쪽 값을 반환한다. falsy값을 고려하지 않는다.

let obj = { name: '현수', age: 19, test: null };

console.log(obj['name'] || 0);
// => 현수

console.log(obj['age'] || 0);
// => 19

console.log(obj['test'] || 0);
// => 0

console.log(obj['nothing'] || 0);
// => 0

//마치 삼항연산자를 사용 한 것처럼 출력됨
// console.log(obj['name'] ? obj['name'] : 0);

console.log('===============');

console.log(false || 123);
// => 123
console.log(false ?? 123);
// => false
console.log(0 || 123);
// => 123
console.log(0 ?? 123);
// => 0
