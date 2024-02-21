/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let hash = new Map();

  for (const val of nums) {
    hash.set(val, hash.get(val) || 1);
  }

  for (const key of hash.keys()) {
    if (hash.get(key) >= 2) return key;
  }
};
