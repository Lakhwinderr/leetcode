/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0){
        return 0;
    }
    const set = new Set();
    let i = 0;
    let j = 1;
    set.add(s[i]);
    let max = 1;
    let count = 0;
    while(j < s.length){
        while(j < s.length && !set.has(s[j])){
            set.add(s[j]);
            j++;
        }
        count = j - i;
        max = Math.max(count, max);
        set.delete(s[i]);
        i++;
    }
    return max;
};
// @lc code=end

