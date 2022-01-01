let input = `5
5
2
3
4
1`.split('\n');
input.shift();
console.log(input.map(Number).sort((a, b) => a - b));
