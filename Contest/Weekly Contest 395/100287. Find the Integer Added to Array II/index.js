/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumAddedInteger = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  const n = nums1.length;
  const m = nums2.length;
  let min_x = Infinity;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let modifiedNums1 = nums1.filter(
        (_, index) => index !== i && index !== j
      );

      let possible = true;
      let x = nums2[0] - modifiedNums1[0];

      for (let k = 1; k < m; k++) {
        if (nums2[k] - modifiedNums1[k] !== x) {
          possible = false;
          break;
        }
      }

      if (possible) {
        min_x = Math.min(min_x, x);
      }
    }
  }

  return min_x;
};
