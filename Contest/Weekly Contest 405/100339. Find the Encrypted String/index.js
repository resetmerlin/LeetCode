/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function (s, k) {
  let n = s.length;
  let answer = "";

  for (let i = 0; i < n; i++) {
    answer += s[(i + k) % n];
  }

  return answer;
};
