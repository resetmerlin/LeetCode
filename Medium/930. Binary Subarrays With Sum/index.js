/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let hash = new Map();

  let totalSubarray = 0;
  let current = 0;
  hash.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    current += nums[i];

    if (hash.get(current - goal) && current - goal >= 0) {
      totalSubarray += hash.get(current - goal);
    }

    hash.set(current, hash.get(current) + 1 || 1);
  }

  return totalSubarray;
};
