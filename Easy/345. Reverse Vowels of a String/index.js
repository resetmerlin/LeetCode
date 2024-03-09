/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let arr = new Array(s.length);
  let newArr = [];
  for (let i = 0; i < s.length; i++) {
    let temp = s[i].toUpperCase();
    if (
      temp == "A" ||
      temp == "E" ||
      temp == "I" ||
      temp == "O" ||
      temp == "U"
    ) {
      newArr.push(s[i]);
    } else {
      arr[i] = s[i];
    }
  }

  newArr = newArr.reverse();

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      arr[i] = newArr.shift();
    }
  }

  return arr.join("");
};
