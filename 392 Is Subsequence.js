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

// solution using two pointers
const isSubsequence_ForLoop = (s, t) => {
  let p1 = 0;
  for (let i = 0; i < t.length, p1 < s.length; i++) {
    if (s[p1] === t[i]) {
      p1++;
    }
  }
  if (p1 === s.length) {
    return true;
  }
  return false;
};

const isSubsequence_TwoPointers = (s, t) => {
  let p1 = 0,
    p2 = 0;
  while (p1 < s.length && p2 < t.length) {
    if (s[p1] === t[p2]) {
      p1++;
      p2++;
    } else {
      p2++;
    }
  }
  return p1 === s.length;
};

console.log(isSubsequence_TwoPointers("abc", "ahbgdc"));
// console.log(isSubsequence_TwoPointers("", ""));
