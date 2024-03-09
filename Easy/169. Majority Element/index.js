/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let hash = new Map();

  for (const val of nums) {
    hash.set(val, hash.get(val) + 1 || 1);

    if (hash.get(val) >= nums.length / 2) return val;
  }
};
