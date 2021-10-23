// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

// Array.fill(value, start_index, end_index)
// 배열에서 start_index 부터 (end_index - 1) 까지의 값을 value값으로 바꾼다.

const arr = [1, 2, 3, 4, 5];

console.log(arr.fill(0, 1, 4));
// => [1,0,0,0,5]

// 기존 배열도 바뀐것을 확인할 수 있다.
console.log(arr);
// => [1,0,0,0,5]
