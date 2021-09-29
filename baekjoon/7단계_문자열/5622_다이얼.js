let s = require('fs').readFileSync(0, 'utf8').trim();
let d = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];
let r = 0;
for (let c of s) r += d.findIndex(dc => dc.includes(c)) + 3;
console.log(r);
