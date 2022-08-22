//  https://leetcode.com/problems/first-unique-character-in-a-string/
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

const s = "loveleetcode";

const firstUniqChar = (s) => {
  const obj = {};
  for (i of s) {
    obj[i] = obj[i] + 1 || 1;
  }
  for (let j = 0; j < s.length; j++) {
    if (obj[s[j]] === 1) {
      return j;
    }
  }
  return -1;
};
console.log(firstUniqChar(s));
