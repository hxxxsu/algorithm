const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(Number(line));
}).on('close', function () {
  if (input[0] > -1 && input[1] > -1) {
    console.log(1);
  } else if (input[0] < 0 && input[1] > -1) {
    console.log(2);
  } else if (input[0] < 0 && input[1] < 0) {
    console.log(3);
  } else {
    console.log(4);
  }
  process.exit();
});
