/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
  //     loop for each column
  //     loop to reach the bottom of the grid or reach a resting place;
  const result = [];
  for (let j = 0; j < grid[0].length; j++) {
    let k = j;
    let flag = true;
    console.log("Starting a new loop with values:");
    console.log({ k, flag, result });
    for (let i = 0; i < grid.length && flag; i++) {
      console.log({ i, j, k, result });
      if (grid[i][k] > 0) {
        //                 board points right
        console.log("board points right");
        if (k === grid[0].length - 1 || grid[i][k + 1] < 0) {
          console.log("Reached arrest at");
          console.log({ i, j, k, result });
          result.push(-1);
          flag = false;
          continue;
        } else {
          k++;
        }
      } else {
        //                 board points left
        console.log("board points left");
        if (k === 0 || grid[i][k - 1] > 0) {
          result.push(-1);
          flag = false;
          continue;
        } else {
          k--;
        }
      }
      console.log({ i, k, result });
    }
    if (flag) {
      console.log(k);
      console.log(grid[0].length);
      if (k >= grid[0].length || k < 0) result.push(-1);
      else result.push(k);
    }
  }
  console.log(result);
  return result;
};

// console.log(
//   findBall([
//     [1, 1, 1, -1, -1],
//     [1, 1, 1, -1, -1],
//     [-1, -1, -1, 1, 1],
//     [1, 1, 1, 1, -1],
//     [-1, -1, -1, -1, -1],
//   ])
// );

console.log(
  findBall([
    [1, 1, 1, 1, 1, 1],
    [-1, -1, -1, -1, -1, -1],
    [1, 1, 1, 1, 1, 1],
    [-1, -1, -1, -1, -1, -1],
  ])
);
