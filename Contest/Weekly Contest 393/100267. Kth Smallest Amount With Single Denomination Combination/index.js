/**
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
var findKthSmallest = function (coins, k) {
  coins.sort((a, b) => a - b);
  let arr = [];
  let originK = k;
  let temp;
  let decrement = 0;
  for (let j = 1; j <= k + decrement; j++) {
    originK--;
    for (let m = 0; m < coins.length; m++) {
      if (temp === coins[m] * j) {
        originK++;
        decrement++;
      }
      temp = coins[m] * j;
      if (!arr.includes(temp)) arr.push(temp);
      if (originK === 0) {
        return arr.sort((a, b) => a - b)[k - 1 - decrement];
      }
    }
  }
};
