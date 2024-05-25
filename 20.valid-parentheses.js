/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stk = [];
    for(const bracket of s){
        if(bracket === "(" || bracket === "{" || bracket === "["){
            stk.push(bracket);
        }else{
            if(stk.length === 0){
                stk.push(bracket);
            }else{
                const prevBracket = stk.pop();
                if(bracket === ")" && prevBracket !== "("){
                    stk.push(prevBracket)
                }else if(bracket === "}" && prevBracket !== "{"){
                    stk.push(prevBracket)
                }else if(bracket === "]" && prevBracket !== "["){
                    stk.push(prevBracket)
                }
            }
        }
    }
    return stk.length === 0;
};
// @lc code=end

