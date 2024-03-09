/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  let hash = new Map();

  for (const val of nums) {
    hash.set(val, hash.get(val) + 1 || 1);
  }

  let max = Math.max(...hash.values());
  let answer = 0;
  for (const val of hash.values()) {
    if (val === max) answer++;
  }
  return answer;
};
