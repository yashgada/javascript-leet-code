// https://leetcode.com/problems/two-sum/

const nums = [2, 7, 11, 15];
const target = 9;
const twoSums = (nums, target) => {
  const ref = new Map();
  let remainder;
  for (i in nums) {
    remainder = target - nums[i];
    if (ref.get(remainder)) {
      return [i, ref.get(remainder)];
    } else {
      ref.set(nums[i], i);
    }
  }
};
twoSums(nums, target);
console.log(twoSums(nums, target));
