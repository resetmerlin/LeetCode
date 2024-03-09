/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = -Infinity;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let width = (right - left) * Math.min(height[left], height[right]);
    max = Math.max(max, width);

    if (height[left] < height[right]) {
      left++;
    } else right--;
  }

  return max;
};
