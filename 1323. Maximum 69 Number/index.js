/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let arr = [...(num + "")];
  console.log(arr.findIndex((val) => val === "6"));
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "6" && arr[i + 1] == "9") arr[i] = "9";
  }
  return arr.reverse().join("");
};
