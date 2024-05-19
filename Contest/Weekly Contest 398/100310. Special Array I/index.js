/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
  let left = 0;
  let right = 1;

  while (right < nums.length) {
    if (
      (nums[left] % 2 === 0 && nums[right] % 2 === 0) ||
      (nums[left] % 2 === 1 && nums[right] % 2 === 1)
    )
      return false;

    left++;
    right++;
  }

  return true;
};
