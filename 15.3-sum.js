/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var threeSum = function(nums) {
    const result = [];
    nums.sort()
    for(let i = 0; i < nums.length - 2; i++){
        if(i === 0 || (i > 0 && nums[i] != nums[i - 1])){
            const target = 0 - nums[i];
            let s = i + 1;
            let e = nums.length - 1;
            
            while(s < e){
                
                if(nums[s] + nums[e] === target){
                    result.push([nums[i], nums[s], nums[e]]);
                    while(s < e && nums[s] === nums[s + 1]){ s++;}
                while(s < e && nums[e] === nums[e - 1]){e--;}
                    s++; e--;
                }
                else if(nums[s] + nums[e] < target){
                    s++;
                }
                else{
                    e--;
                }
            }

        }
    }
    return result;
};

// @lc code=end

