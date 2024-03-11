/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  let hash = new Map();
  let str = "";

  for (const val of s) {
    hash.set(val, hash.get(val) + 1 || 1);
  }

  for (const val of order) {
    if (hash.has(val)) {
      for (let i = 0; i < hash.get(val); hash.set(val, hash.get(val) - 1)) {
        str += val;
      }
    }
  }
  for (const key of hash.keys()) {
    if (hash.get(key) > 0) {
      for (let i = 0; i < hash.get(key); i++) {
        str += key;
      }
    }
  }

  return str;
};
