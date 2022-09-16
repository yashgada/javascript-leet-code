// https://leetcode.com/problems/find-original-array-from-doubled-array/

/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function (changed) {
  console.log(changed);
  if (changed.length % 2 > 0) return [];
  const obj = {};
  const result = [];
  for (let i of changed) {
    obj[i] = (obj[i] || 0) + 1;
  }
  for (let i in obj) {
    if (i === "0") {
      console.log("triggered");
      for (; obj[i] > 0; obj[i] -= 2) result.push(parseInt(i));
      continue;
    }
    if (obj[i] && obj[i * 2] >= obj[i]) {
      obj[i * 2] -= obj[i];
      for (; obj[i] > 0; obj[i]--) {
        result.push(parseInt(i));
      }
    } else if (obj[i] === 0) {
      continue;
    } else {
      return [];
    }
  }

  console.log(obj);
  return result;
};

console.log(findOriginalArray([1, 3, 4, 2, 6, 8]));
console.log(findOriginalArray([6, 3, 0, 1]));
console.log(findOriginalArray([1]));
console.log(findOriginalArray([0, 0, 0, 0]));
console.log(findOriginalArray([2, 1, 2, 4, 2, 4]));
console.log(findOriginalArray([4, 4]));
