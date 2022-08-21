// https://leetcode.com/problems/pascals-triangle/

const generate = (numRows) => {
  const ans = [];
  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      ans.push([1]);
      continue;
    }
    if (i === 1) {
      ans.push([1, 1]);
      continue;
    }
    let arr = new Array(i + 1).fill(0);
    for (let j = 0; j < arr.length; j++) {
      if (j === 0 || j === arr.length - 1) {
        arr[j] = 1;
        continue;
      }
      arr[j] = ans[i - 1][j - 1] + ans[i - 1][j];
    }
    ans.push(arr);
  }
  return ans;
};

console.log(generate(5));
