// 피타고라스의 정리를 사용하여 직각 삼각형 여부를 구함.
// let input = require('fs').readFileSync(0, 'utf8').split('\n');
let input = ['6 8 10', '25 52 60', '5 12 13', '5 4 3', '0 0 0'];
for (let x of input) {
  const [a, b, c] = x
    .split(' ')
    .map(num => Math.pow(+num, 2))
    .sort((a, b) => a - b);
  if (a + b + c === 0) break;
  if (a + b === c) console.log('right');
  else console.log('wrong');
}

// 숏코딩
// let s=require('fs').readFileSync(0,'utf8').split('\n');
// for(let x of s){
// let[a,b,c]=x.split(' ').map(n=>+n*+n).sort((a,b)=>a-b);
// if(a+b+c===0)break;
// if(a+b===c)console.log('right');
// else console.log('wrong');
// }
