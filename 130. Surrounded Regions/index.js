/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const visited = new Set();
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (r == 0 || r == board.length - 1 || c == 0 || c == board[0].length - 1)
        explore(r, c, visited);
    }
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (board[r][c] == "W") {
        board[r][c] = "O";
      } else if (board[r][c] == "O") {
        board[r][c] = "X";
      }
    }
  }

  function explore(r, c, visited) {
    const rowInbounds = 0 <= r && r < board.length;
    const colInbounds = 0 <= c && c < board[0].length;

    if (!rowInbounds || !colInbounds) return;

    let pos = r + "," + c;
    if (visited.has(pos)) return;
    visited.add(pos);
    if (board[r][c] == "X") return;
    if (board[r][c] == "O") board[r][c] = "W";

    explore(r - 1, c, visited);
    explore(r + 1, c, visited);
    explore(r, c - 1, visited);
    explore(r, c + 1, visited);

    return;
  }

  console.log(board);
};
