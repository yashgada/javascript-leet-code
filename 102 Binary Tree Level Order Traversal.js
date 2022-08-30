// https://leetcode.com/problems/binary-tree-level-order-traversal/submissions/

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const result = [[root.val]];
  let index = 0;
  dfs(result, root, index + 1);
  return result;
};

function dfs(result, root, index) {
  // console.log("root is ",root)
  // console.log('index is ',index)
  // console.log('result is ',result)
  // console.log("hi")
  // console.log(result[index])
  // console.log("hi")

  if (!root) return;
  // root.children?.forEach(node=>{
  //     result[index] = [...result[index],node.value];
  // console.log(result)
  // console.log(typeof(result))
  //     dfs(result,node,index+1)
  // })
  // result[index] = [...result[index]||[],root.left.val,root.right.val];
  // if(!result[index]) result[index] = [];
  // console.log(root.left)
  // console.log(root.right)
  if (root.left) {
    result[index] = [...(result[index] || []), root.left.val];
    dfs(result, root.left, index + 1);
  }
  if (root.right) {
    result[index] = [...(result[index] || []), root.right.val];
    dfs(result, root.right, index + 1);
  }
  // console.log(result)
}
