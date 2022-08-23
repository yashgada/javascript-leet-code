// Trying to implement insertion sort

const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] > num) {
        nums[j + 1] = nums[j];
      }
      if (nums[j] < num) {
        nums[j + 1] = num;
        break;
      }
      if (j === 0) nums[0] = num;
    }
  }
  return nums;
};

const insertionSort_WhileLoop = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let num = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > num) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = num;
  }
  return arr;
};

// console.log(insertionSort([5, 4, 3, 2, 1]));
// console.log(insertionSort([1, 2, 3, 4, 5]));
console.log(insertionSort([8, 20, -2, 4, -6]));

console.log(insertionSort_WhileLoop([5, 4, 3, 2, 1]));
console.log(insertionSort_WhileLoop([1, 2, 3, 4, 5]));
console.log(insertionSort_WhileLoop([8, 20, -2, 4, -6]));

const arr = [8, 20, -2, 4, -6];
insertionSort_WhileLoop(arr);
console.log(arr);
