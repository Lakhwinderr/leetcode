/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    let max = nums[0];
    let productTillNow = [1,1];

    for(const num of nums){
        const [x, y] = productTillNow;


    }
    return max;
};
// @lc code=end

