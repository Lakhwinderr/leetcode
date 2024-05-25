/*
 * @lc app=leetcode id=496 lang=javascript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const nums3 = new Array(nums2.length);
    let max  = nums2[nums2.length - 1];
    for(let i = nums2.length - 1; i > -1; i--){
        if(nums2[i] < max){
            nums3[i] = max;
        }else{
            max = nums2[i];
            nums3[i]  = -1;
        }
    }
    console.log(nums3)
    return nums2;
};
// @lc code=end

