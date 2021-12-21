// https://programmers.co.kr/learn/courses/30/lessons/67256
// 키패드 누르기
function solution(numbers, hand) {
  const numPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'];

  let from = { lx: 3, ly: 0, rx: 3, ry: 2 };
  return numbers
    .map(n => {
      let i = numPad.findIndex(element => element === n);
      let x = ~~(i / 3);
      let y = i - x * 3;

      if (y === 1) {
        let lc = Math.abs(from.lx - x) + Math.abs(from.ly - y);
        let rc = Math.abs(from.rx - x) + Math.abs(from.ry - y);
        if (lc < rc || (lc === rc && hand === 'left')) {
          from.lx = x;
          from.ly = y;
          return 'L';
        } else if (lc > rc || (lc === rc && hand === 'right')) {
          from.rx = x;
          from.ry = y;
          return 'R';
        }
      }

      if (y === 0) {
        from.lx = x;
        from.ly = y;
        return 'L';
      } else if (y === 2) {
        from.rx = x;
        from.ry = y;
        return 'R';
      }
    })
    .join('');
}

let testCases = [
  { numbers: [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], hand: 'right' },
  { numbers: [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], hand: 'right' },
  { numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], hand: 'right' }
];

testCases.forEach(testCase => {
  console.log('FINISH=>', solution(testCase.numbers, testCase.hand));
});
