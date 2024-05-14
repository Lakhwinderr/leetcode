/*
 * @lc app=leetcode id=1046 lang=javascript
 *
 * [1046] Last Stone Weight
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */

var maxTwo = function(nums){
    let max1 = -1;
    let max2 = -1;
    let j = 0;
    let k = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > max1){
            max2 = max1;
            k = j;
            max1 = nums[i];
            j = i;
        }else if(nums[i] > max2){
            max2 = nums[i];
            k = i;
        }
    }
    return [j,k];
}
var lastStoneWeight = function(stones) {
 if(stones.length === 1) {
    return stones[0]
 }
    while(true){
        const [i,j] = maxTwo(stones);
    
    
        // console.log(i, j)
        // console.log(stones)
        if(stones[j] === 0){
            return stones[i];
        }

        if(stones[i] === stones[j]){
            stones[i] = 0;
            stones[j] = 0;
        }else{
            stones[i] = stones[i] - stones[j];
            stones[j] = 0;
        }

    }
    return 0;
};
// @lc code=end

