// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  //     First, search p and add the nodes traversed to keep track
  let curr = root;
  let pathP = findPath(root, p);
  let pathQ = findPath(root, q);
  let i;
  for (i = pathP.length - 1; !pathQ.includes(pathP[i]); i--) {}
  return pathP[i];
};
const findPath = (root, p) => {
  let curr = root;
  let pathP = [root];
  while (curr.val !== p.val) {
    if (p.val < curr.val) curr = curr.left;
    else curr = curr.right;
    pathP.push(curr);
  }
  return pathP;
};

var lowestCommonAncestor_optimal = function (root, p, q) {
  [p, q] = [Math.min(p.val, q.val), Math.max(p.val, q.val)];
  let curr = root;
  while (!(p <= curr.val && q >= curr.val)) {
    if (q < curr.val) curr = curr.left;
    else curr = curr.right;
    console.log(curr.val);
  }
  return curr;
};
