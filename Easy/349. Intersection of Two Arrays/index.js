/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let set = new Set();
  let answer = [];
  for (const val of nums1) {
    set.add(val);
  }

  for (const val of nums2) {
    if (set.has(val)) answer.push(val);
  }
  let newSet = new Set(answer);

  return [...newSet];
};
