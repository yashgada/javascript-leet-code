// https://leetcode.com/problems/longest-nice-substring/

/**
 * @param {string} s
 * @return {string}
 */

const isNiceString = (s) => {
  let arr = new Array(52).fill(false);
  for (let i = 0; i < s.length; i++) {
    if (s[i] > "Z") {
      arr[(s.charCodeAt(i) - 6) % 52] = true;
    } else {
      arr[s.charCodeAt(i) % 52] = true;
    }
  }
  for (let i = 0; i < 52; i++) {
    if (arr[i]) {
      if (arr[(i + 26) % 52]) {
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
};

const isNiceString_simpler = (s) => {
  // Checks if substring has small and capitals both of each char.
  for (let i of s) {
    if (s.includes(i.toLowerCase()) && s.includes(i.toUpperCase())) continue;
    return false;
  }
  return true;
};

var longestNiceSubstring = function (s) {
  if (s.length < 2) return "";
  if (isNiceString_simpler(s)) return s; // Base case
  let i;
  for (i = 0; i < s.length; i++) {
    let char = s[i];
    if (s.includes(char.toLowerCase()) && s.includes(char.toUpperCase()))
      continue;
    break;
  }
  let left = s.slice(0, i);
  left = longestNiceSubstring(left);
  const right = longestNiceSubstring(s.slice(i + 1));
  const longest = left.length >= right.length ? left : right;
  return longest;
};

console.log(longestNiceSubstring("YazaAay"));
