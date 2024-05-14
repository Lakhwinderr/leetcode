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
    nums.sort((a,b) => a - b)
    //using pointer approach
    for(let i = 0; i < nums.length - 2; i++){
        //check duplicates
        if(i > 0 && nums[i] === nums[i - 1]){
            continue;
        }
        const target = 0 - nums[i];
        let j = i+ 1;
        let k = nums.length - 1;
        while(j < k){
            if(nums[j] + nums[k] < target){j++;}
            else if(nums[j] + nums[k] > target){k--;}
            else{
                result.push([nums[i], nums[j], nums[k]]);
                //skip duplicates
                j++;
                k--;
                while(j < k && nums[j] === nums[j - 1]){j++;}
                while(j < k && nums[k] === nums[k+ 1]){k--;}              
            }
        }
    }
    return result;
};

// @lc code=end

