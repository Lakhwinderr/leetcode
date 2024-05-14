/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const ans = [];
    intervals.sort((a,b) => a[0] - b[0]);
    for(const interval of intervals){
        if(ans.length === 0){
            ans.push(interval)
        }else{
            const first = ans[ans.length  - 1];
            //check if it merges with the current
            //first check if it merges as whole
            if(first[1] >= interval[1]){
                continue;
            }
            else if(first[1] >= interval[0]){
                //create new interval and push it in
                //before that del the previous
                ans[ans.length - 1][1] = interval[1];
            }else{
                ans.push(interval)
            }
        }
    }
    return ans;
};
// @lc code=end

