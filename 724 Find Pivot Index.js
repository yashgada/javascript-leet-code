//  https://leetcode.com/problems/find-pivot-index/

const pivotIndex = (nums) => {
  const o = {};
  if (nums.length === 1) return 0;
  for (let i = 0; i < nums.length; i++) {
    let j = nums.length - 1 - i;
    console.log(j);
    if (i === 0) {
      o[i] = [nums[0], null];
      o[j] = [null, nums[nums.length - 1]];
      continue;
    }
    if (o[i]) {
      o[i][0] = o[i - 1][0] + nums[i];
    } else {
      console.log(i, o[i]);
      o[i] = [o[i - 1][0] + nums[i], null];
    }
    if (o[j]) {
      o[j][1] = o[j + 1][1] + nums[j];
      console.log(j);
    } else {
      console.log(j);
      console.log(o[j + 1][0]);
      console.log(o[j + 1][0] + nums[j]);
      o[j] = [null, o[j + 1][1] + nums[j]];
    }
  }
  for (let i = 0; i < nums.length; i++) {
    const [a, b] = o[i];
    if (a === b) return i;
  }
  console.log(o);
  return -1;
};

const pivotIndex_More_Optimal = (nums) => {
  if (nums.length === 1) return 0;
  let arr = new Array(nums.length);
  arr[nums.length - 1] = 0;
  for (let j = nums.length - 2; j >= 0; j--) {
    arr[j] = arr[j + 1] + nums[j + 1];
  }
  console.log(arr);

  if (arr[0] === 0) return 0;
  arr[0] = 0;
  console.log(arr);
  for (let i = 1; i < nums.length; i++) {
    let sum = arr[i - 1] + nums[i - 1];
    console.log(sum);
    if (arr[i] === sum) {
      console.log(i);
      return i;
    } else {
      console.log("hi");
      arr[i] = sum;
      console.log(arr);
    }
  }
  if (arr[nums.length - 1] === 0) return nums.length - 1;
  console.log(arr);
  return -1;
};

// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([0]));

console.log(pivotIndex_More_Optimal([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex_More_Optimal([-1, -1, 0, 1, 1, 0]));
console.log(pivotIndex_More_Optimal([1, 2, 3]));
