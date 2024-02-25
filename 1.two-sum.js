/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, sum) {
    const set  = new Set();
    const arr = []
    for(let i = 0; i < nums.length; i++){
        const otherNum = sum - nums[i];
        if(set.has(otherNum)){
            for(let k = 0; k < i; k++){
                if(nums[k] === otherNum){
                    arr.push(k);
                    arr.push(i);
                    break;
                }
            }
          break;  
        }
        set.add(nums[i])
    }
    return arr;
};
// @lc code=end

