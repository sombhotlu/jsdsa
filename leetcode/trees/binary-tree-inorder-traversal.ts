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

function inorderTraversal(root: TreeNode | null): number[] {
	let result: number[] = []
	inorderTraversalTree(root, result)
	return result
}

function inorderTraversalTree(node: TreeNode | null, result: number[]) {
	if (node?.left) inorderTraversalTree(node.left, result)
	if (node) result.push(node.val)
	if (node?.right) inorderTraversalTree(node.right, result)
}

// let root = new TreeNode(
// 	1,
// 	new TreeNode(2, new TreeNode(4), new TreeNode(5)),
// 	new TreeNode(3, new TreeNode(6), new TreeNode(7)),
// )

let root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))

console.log(inorderTraversal(root))
