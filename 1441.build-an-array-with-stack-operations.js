/*
 * @lc app=leetcode id=1441 lang=javascript
 *
 * [1441] Build an Array With Stack Operations
 */

// @lc code=start
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const set = new Set(target);
    let ans = []
    for(let i = 1 ; i < n + 1; i++){

        if(set.has(i)){
            ans.push("Push")
        }
        else{
            ans.push("Push")
            ans.push("Pop")
        }

        if(i === target[target.length - 1]){
            break;
        }
    }
    return ans;
};
// @lc code=end

