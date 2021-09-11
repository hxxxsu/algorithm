const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let text = '';
rl.on('line', line => {
  const data = line.split(' ');
  if (data.length === 2) {
    text += `${parseInt(data[0]) + parseInt(data[1])}\n`;
  }
}).on('close', () => {
  console.log(text);
  process.exit;
});
