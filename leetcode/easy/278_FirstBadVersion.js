const isBadVersion = version => {
  const BV = 325;
  return version >= BV || false;
};

var solution = function (n) {
  for (let i = 1; i <= n; i++) {
    if (isBadVersion(i)) return i;
  }
};

console.log('result', solution(10000));
