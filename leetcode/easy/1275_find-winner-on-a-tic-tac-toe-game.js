/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  const cases = ['012','345','678','036','147','258','048','246']
  let grid = new Array(9).fill(0);
  for (let i = 0; i < moves.length; ++i) {
    grid[moves[i][0] * 3 + moves[i][1]] = (i % 2) + 1;
  }
  for (let i = 0; i < cases.length; ++i) {
    const role = grid[cases[i][0]];
    if (role !== 0 && grid[cases[i][1]] === role && grid[cases[i][2]] === role) return role === 1 ? 'A' : 'B';
  }
  return moves.length === 9 ? 'Draw' : 'Pending';
};

console.log(
  tictactoe([
    [0, 0],
    [2, 0],
    [1, 1],
    [2, 1],
    [2, 2]
  ])
);

console.log(
  tictactoe([
    [0, 0],
    [1, 1]
  ])
);
