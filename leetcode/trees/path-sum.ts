class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val
		this.left = left === undefined ? null : left
		this.right = right === undefined ? null : right
	}
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
	if (!root) return false

	if (targetSum - root.val === 0 && !root.left && !root.right) return true
	// if (targetSum - root.val < 0) return false

	return (
		hasPathSum(root?.left, targetSum - root.val) ||
		hasPathSum(root?.right, targetSum - root.val)
	)
}

// let root = new TreeNode(
// 	5,
// 	new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
// 	new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1))),
// )

let root = new TreeNode(1, new TreeNode(2))

console.log(hasPathSum(root, 1))

export {}
