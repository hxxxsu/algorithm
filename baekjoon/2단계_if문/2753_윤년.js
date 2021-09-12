const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  const year = Number(line);

  if (year % 4 === 0 && (year % 100 != 0 || year % 400 === 0)) {
    console.log(1);
  } else {
    console.log(0);
  }
}).on('close', () => {
  process.exit;
});

//sort coding
/*
n=+require('fs').readFileSync('dev/stdin')
console.log(n%400?n%100?n%4?0:1:0:1)
*/
