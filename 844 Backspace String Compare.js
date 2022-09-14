// https://leetcode.com/problems/backspace-string-compare/submissions/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const sStack = [];
  const kStack = [];
  for (let i = 0; i < s.length; i++) {
    console.log(i);
    if (s[i] === "#") sStack.pop();
    else if (s[i] !== undefined) sStack.push(s[i]);
    console.log({ i, sStack });
  }
  for (let j = 0; j < t.length; j++) {
    if (t[j] === "#") kStack.pop();
    else if (t[j] !== undefined) kStack.push(t[j]);
  }
  console.log({ sStack, kStack });
  return sStack.toString() === kStack.toString();
};

console.log(backspaceCompare("xywrrmp", "xywrrmu#p"));
