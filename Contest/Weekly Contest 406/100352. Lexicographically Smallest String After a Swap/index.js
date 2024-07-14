/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function (s) {
  let arr = s.split("");

  for (let i = 0; i < arr.length - 1; i++) {
    let currentChar = parseInt(arr[i]);
    let nextChar = parseInt(arr[i + 1]);

    if (currentChar % 2 === nextChar % 2) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        break;
      }
    }
  }

  return arr.join("");
};
