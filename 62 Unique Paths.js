// https://leetcode.com/problems/unique-paths/submissions/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  if (m === 1 || n === 1) return 1;
  let arr = new Array(m).fill(new Array(n));
  arr[0][0] = 0;
  for (let i = 0; i < m; i++) {
    if (i === 0) arr[0][0] = 0;
    else arr[i][0] = 1;
    let row = arr[i];
    for (let j = 1; j < n; j++) {
      if (i > 0) {
        row[j] = row[j - 1] + (arr[i - 1][j] || 0);
      } else {
        row[j] = 1;
      }
    }
  }
  return arr[m - 1][n - 1];
};
