//https://programmers.co.kr/learn/courses/30/lessons/64061
function solution(board, moves) {
  let bd = [...board];
  let arr = [];
  let cnt = 0;

  moves
    .map(move => move - 1)
    .forEach(move => {
      const idx = bd.findIndex(item => item[move] > 0);
      if (idx != -1) {
        if (arr[arr.length - 1] === board[idx][move]) {
          arr.pop();
          cnt++;
        } else {
          arr.push(board[idx][move]);
        }
        board[idx][move] = 0;
      }
    });
  return cnt * 2;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1]
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
