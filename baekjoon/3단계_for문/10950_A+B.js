const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const cnt = Number(input[0]);
  for (let i = 1; i < cnt + 1; i++) {
    const nums = input[i].split(' ');
    console.log(Number(nums[0]) + Number(nums[1]));
  }
  process.exit;
});
