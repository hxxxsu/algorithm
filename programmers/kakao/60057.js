//https://programmers.co.kr/learn/courses/30/lessons/60057
function solution(s) {
  let arr = [];
  let step = 1;
  for (let i = 0; i < s.length; i++) {
    if (i > step) {
      arr.push(s[i]);
    } else {
      if (s[i] === arr[i + step]) {
        arr[i];
      }
    }
  }

  // for (let step = 1, len = s.length; step <= len; step++) {
  //   answer = s.split('');
  //   console.log('step', step);
  //   let box = [];
  //   answer.forEach((item, i) => {
  //     box.push(item);
  //     box.forEach();
  //   });
  // }
  return answer;
}

let testCases = [
  'aabbaccc'
  // 'ababcdcdababcdcd',
  // 'abcabcdede',
  // 'abcabcabcabcdededededede',
  // 'xababcdcdababcdcd'
];

testCases.forEach(testCase => {
  console.log('FINISH=>', solution(testCase));
});
