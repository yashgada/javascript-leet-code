// https://leetcode.com/problems/search-a-2d-matrix/
const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target = 3;

const matrix2 = [[1], [3]];
const target2 = 0;

const searchMatrix = (matrix, target) => {
  const m = matrix.length;
  const n = matrix[0].length;
  // get the row
  let start = 0;
  let end = m - 1;
  while (start < end) {
    let i = Math.floor((start + end) / 2);
    let min = matrix[i][0];
    let max = matrix[i][n - 1];
    if (min <= target && target <= max) {
      start = i;
      break;
    } else if (min > target) {
      end = i - 1;
    } else {
      start = i + 1;
    }
  }
  const arr = matrix[start];
  start = 0;
  end = n - 1;
  while (start < end) {
    i = Math.floor((start + end) / 2);
    e = arr[i];
    if (e > target) {
      end = i - 1;
    } else if (e < target) {
      start = i + 1;
    } else {
      return true;
    }
  }
  return arr[start] === target;
};

console.log(searchMatrix(matrix2, target2));
