// https://leetcode.com/problems/n-ary-tree-preorder-traversal/submissions/

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
// Recursive solution:
/*
var preorder = function(root) {
    let result = []
    dfs(root,result);    
    return result;
};
function dfs(root,result){
    if(!root) return;
    result.push(root.val);
    root.children.forEach(root=>dfs(root,result))
}
*/

// Iterative solution:
var preorder = function (root) {
  const stack = [];
  const result = [];
  if (!root) {
    return result;
  }
  stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    // console.log(node)
    result.push(node.val);
    // console.log(result)
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i]);
    }
  }
  return result;
};
