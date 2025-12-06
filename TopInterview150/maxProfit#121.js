/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices.length) return 0;

  let smallest = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (smallest > prices[i]) {
      smallest = prices[i];
    }
    maxProfit = Math.max(maxProfit, prices[i] - smallest);
  }
  return maxProfit;
};
const profit = maxProfit([7, 6, 4, 3, 1]);
console.log("max profit ", profit);
