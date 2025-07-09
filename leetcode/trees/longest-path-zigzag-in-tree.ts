class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }


function longestZigZag(root: TreeNode | null): number {
    return calculateLength(root, null, 0)
}

function calculateLength(node: TreeNode | null, prevDirection: 'left' | 'right' | null, count: number) {
    let leftLength = count, rightLength = count

    if (node?.left)
        leftLength = calculateLength(node.left, 'left', prevDirection === 'right' ?  count + 1: 1)
    
    if (node?.right)    
        rightLength = calculateLength(node.right, 'right', prevDirection === 'left' ? count + 1: 1)

    return Math.max(leftLength, rightLength)
}

let root = new TreeNode(1, null, new TreeNode(1, new TreeNode(1), new TreeNode(1, new TreeNode(1, null, new TreeNode(1, null, new TreeNode(1))), new TreeNode(1))))
let root2 = new TreeNode(1, new TreeNode(1, null, new TreeNode(1, new TreeNode(1, null, new TreeNode(1)), new TreeNode(1))))

console.log(longestZigZag(root))
console.log(longestZigZag(root2))