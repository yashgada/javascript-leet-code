// https://leetcode.com/problems/spiral-matrix/?envType=study-plan&id=level-2

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = [];
  let northBound = -1;
  let westBound = -1;
  let southBound = matrix.length;
  let eastBound = matrix[0].length;
  let direction = "EAST";
  let i = 0;
  let j = 0;
  const reg = (i, j) => {
    result.push(matrix[i][j]);
  };

  const isValid = (i, j) => {
    const val =
      i > northBound && i < southBound && j > westBound && j < eastBound;
    console.log({ i, j, northBound, southBound, westBound, eastBound, val });
    return val;
  };
  const nextI = () => {
    if (direction === "NORTH") {
      return i - 1;
    } else if (direction === "SOUTH") {
      return i + 1;
    } else return i;
  };
  const nextJ = () => {
    if (direction === "WEST") {
      return j - 1;
    } else if (direction === "EAST") {
      return j + 1;
    } else return j;
  };
  const changeDir = () => {
    switch (direction) {
      case "NORTH":
        direction = "EAST";
        westBound++;
        break;
      case "SOUTH":
        direction = "WEST";
        eastBound--;
        break;
      case "WEST":
        direction = "NORTH";
        southBound--;
        break;
      case "EAST":
        direction = "SOUTH";
        northBound++;
        break;
      default:
        console.log("Something wrong" + direction);
        break;
    }
  };
  const walk = () => {
    console.log("walking" + direction);
    switch (direction) {
      case "NORTH":
        i--;
        break;
      case "SOUTH":
        i++;
        break;
      case "WEST":
        j--;
        break;
      case "EAST":
        j++;
        break;
      default:
        console.log("Something wrong" + direction);
        break;
    }
  };
  let done = false;
  while (!done) {
    if (isValid(i, j)) reg(i, j);
    console.log(result);
    const val = isValid(nextI(), nextJ());
    console.log({ val, i: nextI(), j: nextJ() });
    if (val) walk();
    else {
      changeDir();
      if (isValid(nextI(), nextJ())) walk();
      else return result;
    }
  }
};

const spiralOrder_Optimised = (matrix) => {
  const result = [];
  const size = matrix[0].length * matrix.length;
  // console.log(size);
  let top = 0;
  let left = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  while (result.length < size) {
    // console.log({ result });
    // console.log({top,right,bottom,left});
    let i = top;
    for (let j = left, i = top; j <= right && result.length < size; j++) {
      result.push(matrix[i][j]);
    }
    // console.log(result);
    top++;
    // console.log({top,left,bottom,right});
    // console.log("exit");
    for (let i = top, j = right; i <= bottom && result.length < size; i++) {
      result.push(matrix[i][j]);
    }
    // console.log(result);
    right--;
    // console.log({top,right,bottom,left});
    for (let i = bottom, j = right; j >= left && result.length < size; j--) {
      result.push(matrix[i][j]);
    }
    // console.log(result);
    bottom--;
    for (let i = bottom, j = left; i >= top && result.length < size; i--) {
      result.push(matrix[i][j]);
    }
    // console.log(result);
    left++;
    // console.log(result);
    // console.log({top,bottom,left,right});
  }
  console.log(result);
  return result;
};

// console.log(
//   spiralOrder([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
// console.log(
//   spiralOrder_Optimised([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
console.log(
  spiralOrder_Optimised([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
