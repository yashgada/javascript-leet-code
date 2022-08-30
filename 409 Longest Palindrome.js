// https://leetcode.com/problems/longest-palindrome/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return 1;
  let map = new Map();
  for (let i of s) {
    // if (map.has(i)) map.set(i, map.get(i) + 1);
    // else map.set(i, 1);
    map.set(i, (map.get(i) || 0) + 1);
  }
  let num = 0;
  items = map.values();
  let { value, done } = items.next();
  while (!done) {
    if (!(value % 2)) num += value;
    else {
      num += value - 1;
    }
    ({ value, done } = items.next());
  }
  // if there is any Odd values in s, only one can be used as center of Pallindrome. And they won't be counted in nums since only adding even.
  if (s.length > num) num += 1;
  console.log(map);
  return num;
};

console.log(longestPalindrome("abccccdd"));
