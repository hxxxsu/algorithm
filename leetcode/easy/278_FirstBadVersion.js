const isBadVersion = version => {
  const BV = 325;
  return version >= BV || false;
};

var solution = function (n) {
  var start = 1;
  var end = n;
  while (start < end) {
    var center = parseInt((end - start) / 2 + start);
    isBadVersion(center) ? (end = center) : (start = center + 1);
  }
  return end;
};

console.log('result', solution(625));
