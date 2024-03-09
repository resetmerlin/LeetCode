/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];

  for (const val of s) {
    if (stack[stack.length - 1] === "(" && val === ")") {
      stack.pop();
    } else if (stack[stack.length - 1] === "{" && val === "}") {
      stack.pop();
    } else if (stack[stack.length - 1] === "[" && val === "]") {
      stack.pop();
    } else {
      stack.push(val);
    }
  }

  return stack.length === 0;
};
