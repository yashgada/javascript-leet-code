// https://leetcode.com/problems/binary-search/
// implementing binary search

const nums = [-1, 0, 3, 5, 9, 12];
const target = 12;

const search = (nums, target) => {
  const { length } = nums;
  let start = 0;
  let end = length - 1;

  while (start < end) {
    let i = Math.floor((start + end) / 2);
    let num = nums[i];
    if (num > target) {
      end = i - 1;
    } else if (num < target) {
      start = i + 1;
    } else {
      return i;
    }
  }
  return nums[start] === target ? start : -1;
};

console.log(search(nums, target));
