/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right && s[left] === s[right]) {
    let current = s[left];
    while (left <= right && current === s[left]) {
      left++;
    }
    while (left <= right && current === s[right]) {
      right--;
    }
  }

  return right - left + 1;
};
