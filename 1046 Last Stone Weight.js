// https://leetcode.com/problems/last-stone-weight/

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  console.log(stones);
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);
    console.log(stones);
    const first = stones.pop();
    const second = stones.pop();
    const diff = first - second;
    diff > 0 ? stones.push(diff) : null;
    console.log(stones);
  }
  console.log(stones);
  return stones[0] || 0;
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1])); // 1
console.log(lastStoneWeight([4, 4])); // 0
console.log(lastStoneWeight([8, 10, 4])); // 2
