/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
  let maxVal = Math.max(...nums);
  let result = 0;
  for (let i = 0; i < k; i++) {
    result += maxVal++;
  }
  return result;
};
