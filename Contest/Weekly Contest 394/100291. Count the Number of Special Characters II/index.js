/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
  let hash = new Map();
  let hash2 = new Map();
  for (let i = 0; i < word.length; i++) {
    hash.set(word[i], hash.get(word[i]) + 1 || 0);
    hash2.set(word[i], i);
  }

  let answer = 0;

  for (const key of hash.keys()) {
    if (
      hash.has(key.toUpperCase()) &&
      key.toUpperCase() !== key &&
      hash2.get(key.toUpperCase()) > hash2.get(key) &&
      word.indexOf(key.toUpperCase()) > word.lastIndexOf(key)
    ) {
      answer++;
    }
  }

  return answer < 0 ? 0 : answer;
};
