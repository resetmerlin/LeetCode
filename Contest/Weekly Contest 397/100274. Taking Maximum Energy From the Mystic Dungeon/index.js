/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
// 0, 3, 6 % 5 = 1
// 1 , 4 ,7 % 5 = 2
// 2 , 5, 8
// 3 , 6, 9
// 4, 7, 10
var maximumEnergy = function (energy, k) {
  const n = energy.length;
  let dp = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    if (i + k >= n) {
      dp[i] = energy[i];
    } else {
      dp[i] = energy[i] + dp[i + k];
    }
  }
  return Math.max(...dp);
};
