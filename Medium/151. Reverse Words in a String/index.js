/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let stack = [];
  let temp = "";
  for (let i = 0; i < s.length + 1; i++) {
    if (s[i] === " " || !s[i]) {
      stack.push(temp);
      temp = "";
    } else {
      temp += s[i];
    }
  }

  stack = stack.filter((x) => x !== "");

  return stack.reverse().reduce((prev, curr, index) => {
    if (index !== 0) {
      return (curr = prev + " " + curr);
    } else {
      return (curr = prev + curr);
    }
  }, "");
};

//// Another solution

var reverseWords = function (s) {
  return s
    .split(" ")
    .reverse()
    .filter((w) => w !== "")
    .join(" ");
};
