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

function countNodes(root: TreeNode | null): number {
	if (!root) return 0

	let heightOfLeftTree = leftTreeHeight(root.left)
	let heightOfRightTree = rightTreeHeight(root.right)

	if (heightOfLeftTree === heightOfRightTree) return (2 << heightOfLeftTree) - 1

	return 1 + countNodes(root.left) + countNodes(root?.right)
}

function leftTreeHeight(node: TreeNode | null) {
	if (!node) return 0

	let count = 0
	while (node) {
		count++
		node = node.left
	}

	return count
}
function rightTreeHeight(node: TreeNode | null) {
	if (!node) return 0

	let count = 0
	while (node) {
		count++
		node = node.right
	}

	return count
}

export {}
