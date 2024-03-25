/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let result = [];
  arr.forEach((x, index) => {
    result.push(fn(x, index));
  });
  return result;
};
