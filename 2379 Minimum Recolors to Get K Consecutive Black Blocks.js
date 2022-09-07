// https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/

/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let minCount = Infinity;
  let count = 0;
  for (let i = 0; i < blocks.length; i++) {
    let char = blocks[i];
    if (char === "W") count++;
    if (i >= k - 1) {
      minCount = minCount > count ? count : minCount;
      if (blocks[i - (k - 1)] === "W") count--;
    }
  }
  return minCount;
};

console.log(minimumRecolors("WBBWWBBWBW", 7));
console.log(minimumRecolors("WBWBBBW", 2));
