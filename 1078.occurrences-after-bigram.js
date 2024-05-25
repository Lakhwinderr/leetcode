/*
 * @lc app=leetcode id=1078 lang=javascript
 *
 * [1078] Occurrences After Bigram
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    const ans = [];
    const stk = [];
    text = text.split(" ");
    console.log(text.length)
    for(let i = text.length - 1; i > -1; i--){
        stk.push(text[i]);
    }
  
    while(stk.length !== 0){
        let word = stk.pop();
        if(stk.length > 0 && word === first){
            word = stk.pop()
            if(stk.length > 0 && word === second){
                word = stk.pop()
                ans.push(word)
                stk.push(word)
            }
            stk.push(word)
            
        }
    }
    return ans;
};
// @lc code=end

