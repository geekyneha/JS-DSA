//leetCode problem: Best Time to Buy and Sell Stock
const besDay = (prices) => {
  let min = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }

    let profit = prices[i] - min;

    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
};

let prices = [7, 1, 5, 3, 6, 4];
console.log(besDay(prices)); // Output: 5 (Buy at 1,
