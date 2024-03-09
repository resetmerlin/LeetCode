/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let hash = new Map();
  for (const val of nums) {
    hash.set(val, hash.get(val) + 1 || 1);

    if (hash.get(val) >= 2) return true;
  }

  return false;
};
