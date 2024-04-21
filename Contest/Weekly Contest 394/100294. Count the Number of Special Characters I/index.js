/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
  let hash = new Map();

  for (let i = 0; i < word.length; i++) {
    hash.set(word[i], hash.get(word[i]) + 1 || 0);
  }

  let answer = 0;
  for (const key of hash.keys()) {
    if (hash.has(key.toUpperCase()) && key.toUpperCase() !== key) answer++;
  }

  return answer;
};
