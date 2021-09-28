console.log(
  Math.max(
    ...require('fs')
      .readFileSync('baekjoon/testcase/7/2908.txt', 'utf-8')
      .split(' ')
      .map(x => {
        return Number(x.split('').reverse().join(''));
      })
  )
);

//숏코딩 1등
console.log(
  Math.max(
    ...require('fs')
      .readFileSync(0, 'utf-8')
      .split(' ')
      .map(s => +s.split('').reverse().join(''))
  )
);
