/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let prefix = 1;
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;

  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= suffix;
    suffix *= nums[j];
  }

  return result;
};
