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

function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
	let result: Array<TreeNode | null> = []
	preorderTraversalTree(root, to_delete, result, null, 'left')
	if (root && !to_delete.includes(root.val)) result.push(root)
	return result
}

function preorderTraversalTree(
	node: TreeNode | null,
	to_delete: number[],
	result: Array<TreeNode | null>,
	parentNode: TreeNode | null,
	direction: 'left' | 'right',
) {
	if (node) {
		if (to_delete.includes(node.val)) {
			if (node?.left?.val && !to_delete.includes(node.left.val)) result.push(node.left)
			if (node?.right?.val && !to_delete.includes(node.right.val)) result.push(node.right)
			if (parentNode) parentNode[direction] = null
		}
	}

	if (node?.left) preorderTraversalTree(node.left, to_delete, result, node, 'left')
	if (node?.right) preorderTraversalTree(node.right, to_delete, result, node, 'right')
}

function removeDeletedNodesFromTree(
	node: TreeNode | null,
	to_delete: number[],
	parentNode: TreeNode | null,
	direction: 'left' | 'right',
) {
	if (node) {
		if (to_delete.includes(node.val)) {
			if (parentNode) parentNode[direction] = null
		}
	}

	if (node?.left) removeDeletedNodesFromTree(node.left, to_delete, node, 'left')
	if (node?.right) removeDeletedNodesFromTree(node.right, to_delete, node, 'right')
}

let root = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(4), new TreeNode(5)),
	new TreeNode(3, new TreeNode(6), new TreeNode(7)),
)

console.log(delNodes(root, [3, 5]))
