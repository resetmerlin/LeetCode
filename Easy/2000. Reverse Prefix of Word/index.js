/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
      let temp = [...word.slice(0, i + 1)].reverse();
      let arr = [...word].slice(i + 1, word.length);
      return [...temp, ...arr].join("");
    }
  }

  return word;
};
