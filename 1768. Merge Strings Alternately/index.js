/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let stack = [];

  for (let i = 0; i < word1.length; i++) {
    stack.push(word1[i]);
    if (word2[i]) stack.push(word2[i]);
  }

  return stack.length !== word1.length + word2.length
    ? [...stack, ...word2.slice(stack.length - word1.length)].join("")
    : stack.join("");
};
