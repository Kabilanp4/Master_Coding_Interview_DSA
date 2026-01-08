/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices.length) return 0;
  let small = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (small > prices[i]) {
      small = prices[i];
    } else {
      maxProfit += prices[i] - small;
      small = prices[i];
    }
  }
  return maxProfit;
};
const result = maxProfit([1, 2, 3, 4, 5]);
console.log("result", result);
