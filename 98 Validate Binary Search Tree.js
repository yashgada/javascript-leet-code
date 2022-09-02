// https://leetcode.com/problems/validate-binary-search-tree/submissions/

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
 * @return {boolean}
 */
var isValidBST = function (root) {
  return isValidSubTree(-Infinity, Infinity, root);
};

const isValidSubTree = (min, max, node) => {
  if (node.val >= max || node.val <= min) return false;
  let left = true;
  let right = true;
  if (node.left) left = isValidSubTree(min, node.val, node.left);
  if (node.right) right = isValidSubTree(node.val, max, node.right);
  return left && right;
};
