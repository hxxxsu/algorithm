// strong type check
const val = '123';

console.log(val === 123);
// => false
console.log(cal === '123');
// => true

/////////////////////
// Functions

// 함수의 이름과 인자는 동사이거나 해당 함수의 의도와 쓰임을 잘 나타낼 수 있는 것으로 지정한다.
// Bad Ex
function email(user) {
  // ~~
}

// Good Ex
function sendEmailUser(emailAddress) {
  // ~~
}

// 특별하지 않은 경우 하나의 함수에서 인자값은 최대 2개까지만 사용하자.
// Bad Ex
function getBookedList(memberPid, startDate, endDate) {
  //~~
}

// Good Ex
function getBookedList({ memberPid, startDate, endDate }) {
  // ~~
}
