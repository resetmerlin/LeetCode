/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let min = 0;
  for (let i = 0; i < nums1.length; i++) {
    min = nums2[i] - nums1[i];
  }

  return min;
};
