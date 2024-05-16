/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let hash = new Map();
  let answer = 0;
  for (const val of s) {
    hash.set(val, hash.get(val) + 1 || 1);
    if (hash.get(val) % 2 == 0) answer += 2;
  }

  return s.length > answer ? answer + 1 : answer;
};
