// https://leetcode.com/problems/find-all-anagrams-in-a-string/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  /*
  This does not work when p has repeating chars. So need to use sliding window, which also improves time complexity.
  // console.log(s);
  // console.log(p.length);
  const result = [];
  for (let i = 0; i < s.length; i++) {
    let obj = {};
    for (let j = 0; j < p.length; j++) {
      let char = s[i + j];
      // console.log(char);
      if (!obj[char]) {
        if (!p.includes(char)) break;
        obj[char] = true;
        // console.log(obj);
      } else {
        // console.log(i, j);
        obj = {};
        break;
      }
      if (j === p.length - 1) {
        console.log(i, j);
        console.log(s[i + j]);
        result.push(i);
        // console.log("pushed, " + j);
        obj = {};
      }
    }
    // console.log(i, obj);
  }
  // console.log(result);
  return result;
  */

  let sArray = new Array(26).fill(0);
  let pArray = new Array(26).fill(0);
  let result = [];
  const arraysValueEqual = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  };

  for (let i = 0; i < p.length; i++) {
    let index = p.charCodeAt(i) % 26;
    pArray[index]++;
  }

  for (let i = 0; i < s.length; i++) {
    let index = s.charCodeAt(i) % 26;
    sArray[index]++;

    if (i >= p.length) {
      sArray[s.charCodeAt(i - p.length) % 26]--;
    }
    if (i >= p.length - 1) {
      if (arraysValueEqual(sArray, pArray)) result.push(i - (p.length - 1));
    }
  }

  return result;
};

console.log(findAnagrams("cbaebabacd", "abc"));
