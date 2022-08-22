//  https://leetcode.com/problems/ransom-note/

const canConstruct = (ransomNote, magazine) => {
  const table = {};
  for (char of magazine) {
    table[char] = table[char] + 1 || 1;
  }
  table;
  for (char of ransomNote) {
    console.log(char);
    if (!table[char]) {
      console.log(table[char]);
      return false;
    }
    table[char] -= 1;
  }
  return true;
};

console.log(canConstruct("a", "b"));
