// https://leetcode.com/problems/n-ary-tree-level-order-traversal/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  //     let result = []

  //     const addToResult = (node, index)=>{
  //         if(!node) return;
  //         if(!result[index])result[index]=[]
  //         result[index].push(node.val)
  //         if(node.children){
  //         node.children.forEach((node)=>addToResult(node, index+1))
  //     }}
  //     addToResult(root,0)
  //     return result

  // if(!root)return []
  // let stack =[]
  // stack.push([root,0])
  // let result = []
  // while (stack.length){
  //     let [curr,index] = stack.shift();
  //     if(!result[index])result[index]=[]
  //     result[index] = [...result[index],curr.val]
  //     stack.push(...curr.children.map(node=>[node,index+1]))
  // }
  // return result

  if (!root) return [];
  let result = [];
  let queue = [];

  queue.push(root);
  while (queue.length) {
    let len = queue.length;
    result.push(queue.map((item) => item.val));

    while (len--) {
      let node = queue.shift();
      for (let child of node.children) {
        queue.push(child);
      }
    }
  }
  return result;
};
