const d = n => {
  let sum = n
    .toString()
    .split('')
    .map(Number)
    .reduce((a, b) => a + b);
  sum += n;
  return sum;
};

let rtnArr = [];
let arr = [];
for (let i = 1; i <= 10000; i++) {
  arr.push(d(i));
  if (arr.indexOf(i) === -1) rtnArr.push(i);
}

console.log(rtnArr.join('\n'));

//숏코딩------------
var list = [];
for (var i = 1; i <= 10000; i++) {
  list.push(d(i));
  if (list.indexOf(i) == -1) console.log(i);
}
function d(n) {
  var cal = n;
  while (1) {
    cal += n % 10;
    n = parseInt(n / 10);
    if (n == 0) break;
  }
  return cal;
}
