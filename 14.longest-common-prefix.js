/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let str = "";
    for(let i = 0; i < strs[0].length; i++){
        if(strs.every(word => word[i] === strs[0][i])){
            str += strs[0][i];
        }
        else{
            return str;
        }
    }
    return str;
};
// @lc code=end

