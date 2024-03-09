/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let hash = new Map();
  for (const val of s) {
    hash.set(val, hash.get(val) + 1 || 1);
  }

  for (const val of t) {
    if (hash.get(val)) {
      hash.set(val, hash.get(val) - 1);
    } else {
      return false;
    }

    if (hash.get(val) < 0) return false;
  }

  return true;
};
