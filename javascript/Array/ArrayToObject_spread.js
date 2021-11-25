// es6의 spread operator(...)를 사용하여 배열을 객체로 만들 수 있다.
let names = ['June', 'Han', 'Logan'];
let nameObj = { ...names };

console.log(nameObj);
// => {0: 'June', 1: 'Han', 2: 'Logan'}
