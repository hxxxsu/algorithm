const input = ['5', '55 185', '58 183', '88 186', '60 175', '46 155'];
let N = input.shift();
console.log(input, N);

for (let i = 0; i < N; i++) {
  console.log('==========');
  let me = input[i].split(' ').map(Number);
  for (let j = 0; j < N; j++) {
    if (j == i) continue;
    let other = input[j];
    console.log(me, other);
  }
}
