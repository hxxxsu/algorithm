let s = require('fs').readFileSync('baekjoon/testcase/7/2941.txt', 'utf8').trim();
let arr = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

console.log(s, arr);

while (s.length > 0) {
  console.log('=========');
  arr.forEach(data => {
    console.log('@@@@@@@@@@');
    if (s.startsWith(data)) {
      s = s.substr(data.length, s.length);
      console.log(s);
    }
  });
}
