/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if(triangle.length === 1){
        return triangle[0][0]
    }
    
    for(let i = triangle.length - 2; i > -1 ; i--){
        for(let j = 0; j < triangle[i].length; j++){
            const ele = triangle[i][j];
            triangle[i][j] = Math.min(ele + triangle[i + 1][j], ele + triangle[i + 1][j + 1]);
        }
    }
    return triangle[0][0];
};
// @lc code=end

