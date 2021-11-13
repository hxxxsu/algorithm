let input = 3;
let N = Number(input); // 원판의 갯수
let count = 0;
let answer = [];

const hanoi = (num, from, other, to) => {
  console.log('num', num, 'from', from, 'other', other, 'to', to);
  if (num > 0) {
    console.log('===========');
    hanoi(num - 1, from, to, other);
    answer.push([from, to]);
    console.log('@@@@@@@@@@');
    hanoi(num - 1, other, from, to);
  }
};

hanoi(N, '1', '2', '3');

console.log(answer);
