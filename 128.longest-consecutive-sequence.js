/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function(nums) {
    
    if(nums.length === 0){
        return 0
    }
    nums.sort((a,b) => a - b)
    console.log(nums)
    let max = 1;
    let count = 1;
    for(let i = 1;  i < nums.length; i++){
        if(nums[i] === nums[i - 1]){
            continue;
        }
        if(nums[i] === nums[i - 1]+ 1){
            count++;
        }
        else{
            count = 1;
        }
        max = Math.max(max, count);
    }
    return max;
};
// @lc code=end

