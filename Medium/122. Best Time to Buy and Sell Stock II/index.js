/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let totalProfit = 0;
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
      let prev = prices[i-1];
      let current = prices[i];
  
      if (prev < current) totalProfit += current - prev;
    }
  
    return totalProfit;
  };
  