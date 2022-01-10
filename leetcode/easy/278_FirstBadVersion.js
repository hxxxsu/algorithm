const isBadVersion = version => {
  const BV = 325;
  return version >= BV || false;
};

var solution = function (n) {
  var start = 1;
  var end = n;
  while (start + 1 < end) {
    var center = parseInt((end - start) / 2 + start);
    if (isBadVersion(center)) end = center;
    else start = center;
  }
  if (isBadVersion(start)) return start;
  return end;
};

console.log('result', solution(10000));
