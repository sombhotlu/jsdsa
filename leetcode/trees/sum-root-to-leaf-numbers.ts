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

function sumNumbers(root: TreeNode | null): number {
	return treeTraversal(root, 0, '')
}

function treeTraversal(root: TreeNode | null, sum: number, numChars: string): number {
	if (!root) return sum

	if (!root.left && !root.right) {
		sum += Number(numChars + root.val)
		return sum
	}

	return (
		treeTraversal(root.left, sum, numChars + root.val) +
		treeTraversal(root.right, sum, numChars + root.val)
	)
}

// let root = new TreeNode(1, new TreeNode(2), new TreeNode(3))
let root = new TreeNode(1, new TreeNode(2), new TreeNode(3))

console.log(sumNumbers(root))

export {}
