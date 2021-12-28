//https://programmers.co.kr/learn/courses/30/lessons/60057
function solution(s) {
  let str = s.split('');
  let answer = s.length;

  for (let step = 1; step <= str.length; step++) {
    let finalArr = [];
    let slicedArr = [];
    for (let i = 0; i < str.length; i += step) slicedArr.push(str.slice(i, i + step).join(''));
    for (let i = 0; i < slicedArr.length; i++) {
      let cnt = 0;
      while (true) {
        if (slicedArr[i] === slicedArr[i + (cnt + 1)]) cnt++;
        else break;
      }
      if (cnt > 0) {
        i += cnt;
        finalArr.push(`${cnt + 1}${slicedArr[i]}`);
      } else finalArr.push(slicedArr[i]);
    }
    const flen = finalArr.join('').length;
    if (answer > flen) answer = flen;
  }
  return answer;
}

let testCases = [
  'aabbaccc',
  'ababcdcdababcdcd',
  'abcabcdede',
  'abcabcabcabcdededededede',
  'xababcdcdababcdcd'
];

testCases.forEach(testCase => {
  console.log('FINISH=>', solution(testCase));
});
