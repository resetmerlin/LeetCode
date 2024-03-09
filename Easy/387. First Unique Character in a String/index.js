/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let hash = new Map();
  for (const val of s) {
    hash.set(val, hash.get(val) + 1 || 0);
  }

  for (let i = 0; i < s.length; i++) {
    if (hash.get(s[i]) === 0) return i;
  }

  return -1;
};
