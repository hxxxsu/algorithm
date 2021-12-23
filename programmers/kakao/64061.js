//https://programmers.co.kr/learn/courses/30/lessons/64061
function solution(board, moves) {
  console.log('board', board);
  console.log('moves', moves);

  moves
    .map(move => move - 1)
    .forEach(move => {
      const item = board.find(item => item[move] > 0);
      console.log('item', item[move]);

      console.log('move', move);
    });
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
