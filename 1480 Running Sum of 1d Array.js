//  https://leetcode.com/problems/running-sum-of-1d-array/submissions/

const runningSum = (nums) => {
  const arr = [];
  let sum = 0;
  for (i of nums) {
    sum += i;
    arr.push(sum);
  }
  return arr;
};

// This option is more space efficient
const runningSum_MostOptimal = (nums) => {
  nums.forEach((num, index) => {
    if (index === 0) {
      nums[index] = num;
      return;
    }
    nums[index] = nums[index] + nums[index - 1];
  });
  return nums;
};

console.log(runningSum_MostOptimal([1, 2, 3, 4]));
