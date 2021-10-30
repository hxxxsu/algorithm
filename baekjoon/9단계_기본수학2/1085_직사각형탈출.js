// let [x, y, w, h] = require('fs').readFileSync(0, 'utf8').split(' ').map(Number);
let [x, y, w, h] = [6, 2, 10, 3];
console.log(Math.min(x, y, w - x, h - y));
