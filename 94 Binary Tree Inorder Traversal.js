// https://leetcode.com/problems/binary-tree-inorder-traversal/submissions/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var inorderTraversal = function(root) {
//     if(!root) return [];
//     return [...inorderTraversal(root.left),root.val,...inorderTraversal(root.right)]
// };

var inorderTraversal = function (root) {
  if (!root) return [];
  let result = [];
  let stack = [];
  stack.push(root);
  while (stack.length) {
    let curr = stack.pop();
    if (curr.right) {
      stack.push(curr.right);
      curr.right = null;
    }
    if (curr.left) {
      stack.push(curr);
      stack.push(curr.left);
      curr.left = null;
    } else {
      result.push(curr.val);
    }
  }
  return result;
};
