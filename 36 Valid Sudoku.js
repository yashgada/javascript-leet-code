// https://leetcode.com/problems/valid-sudoku/
const board = [
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."],
];

const isValidSudoku = (board) => {
  const rowMap = new Map();
  const colMap = new Map();
  const boxMap = new Map();
  for (let i = 0; i < 9; i++) {
    // i is the row here
    rowMap.set(i, new Map());
    for (let j = 0; j < 9; j++) {
      if (i === 0) {
        colMap.set(j, new Map());
      }
      // initialize the boxes
      const c = [Math.floor(i / 3), Math.floor(j / 3)].toString();
      if (i % 3 === 0 && j % 3 === 0) {
        boxMap.set(c, new Map());
      }

      const e = board[i][j];
      if (e === ".") continue;
      // compare in row
      if (rowMap.get(i).get(e)) {
        console.log("failed at ", i, j);
        return false;
      } else {
        rowMap.get(i).set(e, true);
      }
      // compare in colums
      if (colMap.get(j).get(e)) {
        console.log("failed at ", i, j);
        return false;
      } else {
        colMap.get(j).set(e, true);
      }

      // compare boxes
      // console.log(boxMap);
      if (boxMap.get(c).get(e)) {
        return false;
      }
      boxMap.get(c).set(e, true);
    }
  }
  console.table(boxMap);
  return true;
};

console.log(isValidSudoku(board));
