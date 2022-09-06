// https://leetcode.com/problems/min-cost-climbing-stairs/

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let prev1=cost[0]
    let prev2 = cost[1];
    let n = 2;
    let total = 0
        console.log(prev1,prev2, n, total);
    while(n<cost.length){
        // let prev1c = prev1+cost[n];
        // let prev2c = prev2+cost[n];
        // console.log(prev1c,prev2c)
        total=Math.min(prev1+cost[n],prev2+cost[n]);
        // ([prev1,prev2]=[prev2,total]);
        prev1 = prev2;
        prev2 = total;
        n++;
        // console.log(prev1,prev2,"n is ", n,"total is ", total);
    }
    return Math.min(prev1,prev2)
};