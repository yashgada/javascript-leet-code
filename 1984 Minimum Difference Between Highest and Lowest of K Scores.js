// https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/submissions/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  if (nums.length < 2) return 0;
  let leastDiff = Infinity;
  nums.sort((a, b) => a - b);
  for (let i = k - 1; i < nums.length; i++) {
    let diff = nums[i] - nums[i - k + 1];
    leastDiff = leastDiff < diff ? leastDiff : diff;
  }
  return leastDiff;
};
