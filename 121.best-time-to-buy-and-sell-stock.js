/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let j =prices.length - 1;
    let max = prices[j];
    let maxProfit = 0;
    const maxTillNow  = new Array(prices.length).fill(prices[j]);
    for(let i = prices.length - 1; i > -1; i--){
        max = Math.max(max, prices[i]);
        maxTillNow[i] = max;
    }

    for(let i = 0; i < prices.length; i++){
        const profit = maxTillNow[i] - prices[i];
        maxProfit = Math.max(maxProfit, profit);
        
    }
    return maxProfit;
};
// @lc code=end

