//  https://leetcode.com/problems/valid-anagram/
//  Can be improved by combining the first two loops and also only looping through for the third loop, saving the values generation's N time.

const isAnagram = (s, t) => {
  const book = {};
  for (char of s) {
    book[char] = book[char] + 1 || 1;
  }
  for (char of t) {
    if (!book[char]) {
      return false;
    }
    book[char] -= 1;
  }
  const values = Object.values(book);
  for (value of values) {
    if (value !== 0) {
      return false;
    }
  }
  return true;
};
// "anagram";
// "nagaram";
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("ab", "a"));
