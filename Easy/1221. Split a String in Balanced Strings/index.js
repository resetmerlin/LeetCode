/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let increment = 0;
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") {
      increment++;
    } else {
      increment--;
    }

    if (increment === 0) answer++;
  }

  return answer;
};
