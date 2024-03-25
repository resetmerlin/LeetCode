/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let result = [];
  arr.forEach((x, index) => {
    if (fn(x, index)) result.push(x);
  });
  return result;
};
