/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let hash = new Map();
  for (const val of nums) {
    hash.set(val, hash.get(val) + 1 || 1);
  }
  let result = [];
  for (const key of hash.keys()) {
    if (hash.get(key) >= 2) result.push(key);
  }

  return result;
};
