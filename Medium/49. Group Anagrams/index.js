/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = {};

  for (const val of strs) {
    let temp = [...val].sort().join("");
    map[temp] ? map[temp].push(val) : (map[temp] = [val]);
  }

  return Object.values(map);
};
