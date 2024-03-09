/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function (tokens, power) {
  tokens.sort((a, b) => a - b);
  let left = 0;
  let right = tokens.length - 1;
  let score = 0;
  let maxScore = 0;

  while (left <= right) {
    if (tokens[left] <= power) {
      power -= tokens[left];
      left++;
      score++;
      maxScore = Math.max(score, maxScore);
    } else if (score > 0) {
      power += tokens[right];
      right--;
      score--;
    } else break;
  }

  return maxScore;
};
