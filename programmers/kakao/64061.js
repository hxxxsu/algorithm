//https://programmers.co.kr/learn/courses/30/lessons/64061
function solution(board, moves) {
  let bd = [...board];
  let arr = [];

  moves
    .map(move => move - 1)
    .forEach(move => {
      const idx = bd.findIndex(item => item[move] > 0);

      if (idx != -1) {
        arr.push(board[idx][move]);
        board[idx][move] = 0;
      }
    });
  console.log('board', board);
  console.log('arr', arr);

  arr.forEach((item, i) => {
    if (arr.length === i - 1) return;
    if (item === arr[i + 1]) (arr[i] = 0), (arr[i + 1] = 0);
  });

  console.log('arr', arr);
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
