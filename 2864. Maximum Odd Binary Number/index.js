/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
  let arr = [...s].sort();

  while (arr[arr.length - 2] === "1") {
    arr.unshift(arr.pop());
  }

  return arr.join("");
};
