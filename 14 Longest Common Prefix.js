// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // for (let i = 0; i < strs.length; i++){

  // }
  let common = strs[0];
  console.log(common);
  strs.forEach((str) => {
    let temp = "";
    for (let i in str) {
      console.log(typeof i);
      i = parseInt(i);
      if (str[i] === common[i]) {
        console.log({ temp, i });
        temp += str[i];
        console.log({ temp, i });
      }
    }
    common = temp;
  });
  console.log(common);
  return common;
};

// Should try to implement the vertical scanning way described in the leetcode solution at the official site of leetcode. Each string is checked for first char, then the next and so on. I think that is the most efficient algo.
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
