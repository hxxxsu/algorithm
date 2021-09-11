const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  let arr = line.split(' ');
  let hour = Number(arr[0]);
  let minute = Number(arr[1]);

  if (minute < 45) {
    if (hour === 0) {
      hour = 23;
    } else {
      hour -= 1;
    }
    minute = 60 + (minute - 45);
  } else {
    minute -= 45;
  }
  console.log(`${hour} ${minute}`);
}).on('close', () => {
  process.exit;
});
