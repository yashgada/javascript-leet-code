// https://leetcode.com/problems/two-sum/

const nums = [2, 7, 11, 15];
const target = 9;
const twoSums = (nums, target) => {
  const ref = [];
  let remainder;
  for (i in nums) {
    remainder = target - nums[i];
    if (ref[remainder]) {
      return [i, ref[remainder]].sort();
    } else {
      ref[nums[i]] = i;
    }
  }
};
twoSums(nums, target);
console.log(twoSums(nums, target));
