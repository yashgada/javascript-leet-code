// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/

/**
 * @param {string} s
 * @return {number}
 */

const isDistinct = (s) => {
  const obj = {};
  for (i of s) {
    if (obj[i]) return false;
    else obj[i] = true;
  }
  return true;
};

var countGoodSubstrings = function (s) {
  let start = 0;
  let distance = 3;
  let end = start + (distance - 1);
  let count = 0;
  while (distance <= s.length) {
    if (isDistinct(s.slice(start, distance))) count++;
    start++;
    distance++;
  }
  return count;
};

var countGoodSubstrings_optimised = function (s) {
  let start = 0;
  let count = 0;
  while (start <= s.length - 3) {
    if (
      !(
        s[start] === s[start + 1] ||
        s[start + 1] === s[start + 2] ||
        s[start] === s[start + 2]
      )
    )
      count++;
    start++;
  }
  return count;
};
