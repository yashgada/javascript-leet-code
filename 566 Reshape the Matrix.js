// https://leetcode.com/problems/reshape-the-matrix/

const mat = [
  [1, 2],
  [3, 4],
];
const r = 4;
const c = 1;

const matrixReshape = (mat, r, c) => {
  const m = mat.length;
  const n = mat[0].length;
  if (m * n !== r * c) return mat;
  const gen = generator(mat, m, n);
  const mat2 = new Array(r);
  console.log(mat2, r, c);
  for (let i = 0; i < r; i++) {
    mat2[i] = [];
    for (let j = 0; j < c; j++) {
      console.log(i, j);
      let value = gen.next().value;
      mat2[i][j] = value;
      console.log(mat2);
    }
  }
  return mat2;
};

function* generator(mat, m, n) {
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      yield mat[i][j];
    }
  }
}
console.log(matrixReshape(mat, r, c));
