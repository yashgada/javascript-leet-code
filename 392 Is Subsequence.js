//  https://leetcode.com/problems/is-subsequence/

const isSubsequence = (s, t) => {
  let p = 0;
  for (c of t) {
    console.log(c);
    if (c === s[p]) {
      p++;
    }
    if (p === s.length) {
      return true;
    }
  }
  if (p === s.length) {
    return true;
  }
  return false;
};

// console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("", ""));
