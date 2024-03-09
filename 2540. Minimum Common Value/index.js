/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
  let set = new Set();
  for (const val of nums1) {
    set.add(val);
  }

  for (const val of nums2) {
    if (set.has(val)) return val;
  }

  return -1;
};
