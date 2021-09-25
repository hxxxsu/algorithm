let input = require('fs').readFileSync('baekjoon/testcase/7/2675.txt', 'utf-8').split('\n');

for (let i = 1; i <= +input[0]; i++) {
  let arr = input[i].split(' ');
  let text = '';
  for (let j = 0; j < arr[1].length; j++) {
    for (let k = 0; k < arr[0]; k++) {
      text += arr[1][j];
    }
  }
  console.log(text);
}

//숏코딩
console.log(
  (require('fs').readFileSync('dev/stdin') + '')
    .trim()
    .split(
      `
`
    )
    .slice(1)
    .map(
      l => (
        (s = l.split(' ')),
        s[1]
          .split('')
          .map(c => c.repeat(s[0]))
          .join('')
      )
    ).join(`
`)
);
