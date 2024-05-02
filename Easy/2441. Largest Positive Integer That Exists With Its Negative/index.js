/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  let sorted = nums.sort((b, a) => a - b);
  let set = new Set();
  for (const val of nums) {
    set.add(val);
  }
  for (const val of sorted) {
    if (set.has(-val)) return val;
  }
  return -1;
};
