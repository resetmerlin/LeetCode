/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let visited = new Set();
  let answer = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (explore(visited, grid, r, c) === true) answer++;
    }
  }

  return answer;
};

function explore(visited, grid, r, c) {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;

  if (!rowInbounds || !colInbounds) return false;

  if (grid[r][c] === "0") return false;
  const pow = r + "," + c;
  if (visited.has(pow)) return false;
  visited.add(pow);

  explore(visited, grid, r + 1, c);
  explore(visited, grid, r - 1, c);
  explore(visited, grid, r, c + 1);
  explore(visited, grid, r, c - 1);

  return true;
}
