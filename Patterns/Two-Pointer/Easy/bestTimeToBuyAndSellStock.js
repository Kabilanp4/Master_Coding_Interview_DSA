function bestTimeToBuyAndSellStock(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
  }
  return maxProfit;
}

const maxProfit = bestTimeToBuyAndSellStock([7, 1, 5, 3, 6, 4]);
console.log("The max profit is :", maxProfit);
