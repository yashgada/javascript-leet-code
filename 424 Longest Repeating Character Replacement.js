// https://leetcode.com/problems/longest-repeating-character-replacement/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// Checks if the window is valid, given the map, k;
const windowValid = (map, k) => {
  let total = 0;
  let max = 0;
  map.forEach((value) => {
    // console.log(value);
    total += value;
    max = value > max ? value : max;
  });
  const result = total - max <= k;
  return result;
};

var characterReplacement = function (s, k) {
  let start = 0;
  let end = 0;
  const map = new Map();

  // Setting up the first node
  map.set(s[end], 1);
  let count = 1;
  let flag = true;
  let max = 1;
  while (end < s.length - 1) {
    // console.log({ map, flag });
    if (flag) {
      // console.log("end was " + end);
      end++;
      count++;
      map.set(s[end], (map.get(s[end]) || 0) + 1);
    } else {
      // console.log("Triggered false");
      map.set(s[start], map.get(s[start]) - 1);
      start++;
      count--;
    }
    // console.log(map);
    flag = windowValid(map, k);
    if (flag) {
      max = max > count ? max : count;
    }
  }
  // console.log("Last line triggered");
  // console.log(map);
  return max;
};

console.log("Answer is: " + characterReplacement("AABB", 1));
console.log("Answer is: " + characterReplacement("AABABBA", 1));
