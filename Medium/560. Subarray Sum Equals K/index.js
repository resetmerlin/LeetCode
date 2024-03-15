/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let hash = new Map();
  let curr = 0;
  let totalSubarray = 0;

  hash.set(0, 1);
  for (let num of nums) {
    curr += num;

    if (hash.has(curr - k)) {
      totalSubarray += hash.get(curr - k);
    }

    hash.set(curr, hash.get(curr) + 1 || 1);
  }
  return totalSubarray
};
