/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
  let hash1 = new Map();
  let hash2 = new Map();

  for (let i = 0; i < s.length; i++) {
    hash1.set(s[i], i);
  }

  for (let i = 0; i < t.length; i++) {
    hash2.set(t[i], i);
  }

  let answer = 0;

  for (const key of hash1.keys()) {
    answer += Math.abs(hash1.get(key) - hash2.get(key));
  }

  return answer;
};
