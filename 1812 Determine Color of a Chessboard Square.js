// https://leetcode.com/problems/determine-color-of-a-chessboard-square/submissions/

/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  let letter = coordinates[0];
  let num = coordinates[1];
  letter = letter.charCodeAt(0) - 96;
  return ((letter % 2) + (num % 2)) % 2 !== 0;
};
