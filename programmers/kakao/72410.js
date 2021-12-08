//https://programmers.co.kr/learn/courses/30/lessons/72410?language=javascript

// 3~15자
// 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 만 사용가능
// 마침표(.)는 처음과 끝에 쓸 수 없음, 연속 사용도 불가능.

function solution(new_id) {
  let reg = /[^a-z0-9._-]/g;
  let repeatDotReg = /\.+/g;
  let firstReg = /^\./;
  let lastReg = /\.$/;
  //1. 소문자로 치환
  let answer = String(new_id).toLowerCase();
  //2. 지정 문 외 삭제
  answer = answer.replace(reg, '');
  //3. 반복 마침표 삭제
  answer = answer.replace(repeatDotReg, '.');
  //4. 처음이나 끝 마침표 삭제
  if (firstReg.test(answer)) answer = answer.slice(1);
  if (lastReg.test(answer)) answer = answer.slice(0, -1);
  //5. 빈 문자열인 경우 a대입
  if (!answer) answer = 'a';
  //6. 문자열의 길이가 15자리 이상인경우 자르기, 처음이나 끝 마침표 삭제
  answer = answer.substring(0, 15);
  if (firstReg.test(answer)) answer = answer.slice(1);
  if (lastReg.test(answer)) answer = answer.slice(0, -1);
  //7. 2자 이하인 경우 마지막 문제를 반복하여 3자리로 만들기
  while (answer.length < 3) {
    answer += answer[answer.length - 1];
  }
  return answer;
}

let testCases = ['...!@BaT#*..y.abcdefghijklm', 'z-+.^.', '=.=', '123_.def', 'abcdefghijklmn.p'];

testCases.forEach(testCase => {
  console.log('FINISH=>', solution(testCase));
});
