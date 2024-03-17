/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function (s) {
  function generateSubstring(str) {
    let stack = [];
    for (let i = 0; i < str?.length; i++) {
      for (let j = i + 1; j <= str?.length; j++) {
        stack.push(str.substring(i, j));
      }
    }
    return stack;
  }

  const orginal = generateSubstring(s);

  const reversed = [...s].reverse().join("");

  for (const val of orginal) {
    if (reversed.includes(val) && val.length > 1) return true;
  }

  return false;
};
