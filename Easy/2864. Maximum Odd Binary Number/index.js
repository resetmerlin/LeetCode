/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
  let arr = [...s].sort();

  if (!arr.includes("0")) return arr.join("");

  while (arr[arr.length - 2] === "1") {
    arr.unshift(arr.pop());
  }

  return arr.join("");
};
