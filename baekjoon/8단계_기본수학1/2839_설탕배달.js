let n = +require('fs').readFileSync('baekjoon/testcase/8/2839.txt', 'utf8');

let five = 0,
  three = 0;

while (true) {
  if (n % 5 === 0) {
    five = n / 5;
    console.log(five + three);
    break;
  }
  if (n < 0) {
    console.log('-1');
    break;
  }
  n = n - 3;
  three++;
}

// 숏코딩
// var i=require('fs').readFileSync(0,'utf8');
// var n=Math.floor(i/5);
// for(n;n>=0;n--){
// var r=i-n*5;
// if(!(r%3)){
// console.log(n+r/3);
// break;
// }
// }
// if(n<0){
// console.log(-1);
// }
