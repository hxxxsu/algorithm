const input = require('fs').readFileSync(
  'baekjoon/testcase/6/1065.txt',
  'utf-8'
);

function isHan(n) {
  let cnt = 0,
    nums;

  if (n < 100) {
    //n이 한자리수 or 두자리수 인 경우
    return n;
  } else {
    //n이 3자리수 이상인 경우
    for (let i = 100; i <= n; i++) {
      nums = i.toString().split('');

      if (nums[0] - nums[1] == nums[1] - nums[2]) cnt++;
    }
    return 99 + cnt;
  }
}

console.log(isHan(+input));
