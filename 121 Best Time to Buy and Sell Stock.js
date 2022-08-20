// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// https://www.geeksforgeeks.org/maximum-difference-between-two-elements/

const prices = [7, 1, 5, 3, 6, 4];

const maxProfit = (prices) => {
  let maxP = 0;
  let buy = prices[0];
  for (let i = 0; i < prices.length - 1; i++) {
    let p = prices[i + 1] - prices[i];
    if (p > 0) {
      buy = Math.min(buy, prices[i]);
      maxP = Math.max(maxP, prices[i + 1] - buy);
    }
  }
  return maxP;
};

console.log(maxProfit(prices));
