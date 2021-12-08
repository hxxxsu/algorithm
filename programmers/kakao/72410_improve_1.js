//https://programmers.co.kr/learn/courses/30/lessons/72410?language=javascript

function solution(new_id) {
  const answer = new_id
    .toLowerCase() //1. 소문자
    .replace(/[^a-z0-9._-]/g, '') //2. 지정 문자 외 삭제
    .replace(/\.+/g, '.') //3. 반복 마침표 삭제
    .replace(/^\.|\.$/g, '') //4. 양 끝 마침표 삭제
    .replace(/^$/, 'a') //5. 빈 문자열인 경우 a 대입
    .slice(0, 15) //6-1. 문자열 최대 15자리
    .replace(/^\.|\.$/g, ''); //6-2. 양 끝 마침표 삭제
  const len = answer.length;
  return len > 2 ? answer : answer + answer[len - 1].repeat(3 - len);
}

let testCases = ['...!@BaT#*..y.abcdefghijklm', 'z-+.^.', '=.=', '123_.def', 'abcdefghijklmn.p'];

testCases.forEach(testCase => {
  console.log('FINISH=>', solution(testCase));
});
