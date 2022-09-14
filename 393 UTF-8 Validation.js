// https://leetcode.com/problems/utf-8-validation/

/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function (data) {
  // Take a number, convert it to binary;
  let count = 0;
  for (let i of data) {
    i = i.toString(2);
    console.log({ i });
    if (count === 0) {
      console.log("Count 0");
      if (i.length < 8) continue;
      for (let j of i) {
        if (j == 1) count++;
        else break;
      }
      console.log({ count });
      if (count === 1 || count > 4) return false;
      count--;
    } else if (count > 0) {
      console.log({ count });
      if (i.length < 8) return false;
      if (i[1] == 1) return false;
      count--;
    } else {
      console.log({ count });
      console.log("There is a problem");
      return null;
    }
  }
  return count == 0;
};

console.log(validUtf8([197, 130, 1]));
console.log(validUtf8([145]));
console.log(validUtf8([250, 145, 145, 145, 145]));
s;
