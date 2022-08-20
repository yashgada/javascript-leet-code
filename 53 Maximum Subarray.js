// https://leetcode.com/problems/maximum-subarray/
// Maximum contiguous subarray using Kadane's algorithm
// Uses dynamic programming

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSubarray = (nums) => {
  let max = nums[0];
  let maxAti = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxAti = Math.max(nums[i], nums[i] + maxAti);
    max = Math.max(max, maxAti);
  }
  return max;
};
console.log(maxSubarray(nums));
