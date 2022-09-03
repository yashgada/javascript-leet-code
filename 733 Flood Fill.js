// https://leetcode.com/problems/flood-fill/submissions/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  let stack = [];
  let track = {};
  const rows = image.length;
  const columns = image[0].length;
  if (image[sr][sc] === color) return image;
  let og = image[sr][sc];
  stack.push([sr, sc]);
  while (stack.length > 0) {
    let [r, c] = stack.pop();
    image[r][c] = color;
    track[[r][c]] = true;
    let up = r - 1;
    let down = r + 1;
    let left = c - 1;
    let right = c + 1;
    if (up >= 0) {
      if (image[up][c] === og) {
        if (!track[[up, c]]) {
          track[[up, c]] = true;
          stack.push([up, c]);
        }
      }
    }
    if (down < rows) {
      if (image[down][c] === og) {
        if (!track[[down, c]]) {
          track[[down, c]] = true;
          stack.push([down, c]);
        }
      }
    }
    if (left >= 0) {
      if (image[r][left] === og) {
        if (!track[[r, left]]) {
          track[[r, left]] = true;
          stack.push([r, left]);
        }
      }
    }
    if (right < columns) {
      if (image[r][right] === og) {
        if (!track[[r, right]]) {
          track[[r, right]] = true;
          stack.push([r, right]);
        }
      }
    }
  }
  return image;
};

var floodFill_cleaner = function (image, sr, sc, color) {
  const og = image[sr][sc];
  if (og === color) return image;
  const dfs = (sr, sc) => {
    if (
      sr < 0 ||
      sr >= image.length ||
      sc < 0 ||
      sc >= image[0].length ||
      image[sr][sc] !== og
    ) {
      return;
    }
    image[sr][sc] = color;
    dfs(sr + 1, sc);
    dfs(sr - 1, sc);
    dfs(sr, sc + 1);
    dfs(sr, sc - 1);
  };
  dfs(sr, sc);
  return image;
};
