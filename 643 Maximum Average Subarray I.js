// https://leetcode.com/problems/maximum-average-subarray-i/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let maxAverage = -Infinity;
  let average = 0;
  for (let i = 0; i < nums.length; i++) {
    average += nums[i];
    if (i >= k - 1) {
      maxAverage = maxAverage > average ? maxAverage : average;
      average -= nums[i - k + 1];
    }
  }
  return maxAverage / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));
