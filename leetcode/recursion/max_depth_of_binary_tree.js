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
 * @return {number}
 */
 var maxDepth = function(root) {
    
    if(root === null) return 0
    
  return getTreeDepth(root, 1)
};


/*
    treeLength takes root & current depth     
*/

function getTreeDepth(root, currentDepth)  {
    
    if(root === null)
        return currentDepth
    
    let leftDepth = currentDepth, rightDepth = currentDepth
    if(root.left ) {
        leftDepth = getTreeDepth(root.left, currentDepth + 1)
    }
    
    if(root.right) {
        rightDepth = getTreeDepth(root.right, currentDepth + 1)
    }
    
    return Math.max(leftDepth, rightDepth)
}