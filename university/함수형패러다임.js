const str = '1,2,3,4,5';
console.log(
  str
    .split(',')
    .map(Number)
    .reduce((a, b) => a + b)
);
