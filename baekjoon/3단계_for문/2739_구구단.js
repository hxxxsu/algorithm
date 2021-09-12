const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  for (i = 1; i < 10; i++) {
    console.log(`${Number(line)} * ${i} = ${i * Number(line)}`);
  }
}).on('close', () => {
  process.exit;
});
