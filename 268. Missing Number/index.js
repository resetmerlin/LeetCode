/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let max = nums.length;
  let set = new Set();

  for (const val of nums) {
    set.add(val);
  }

  for (let i = 0; i <= max; i++) {
    if (!set.has(i)) return i;
  }
};
