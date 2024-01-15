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

function flatten(root: TreeNode | null) {
	let nodes: TreeNode[] = []
	preOrderTraversal(root, nodes)
	changeRightPointer(root, nodes)
	return root
}

function preOrderTraversal(root: TreeNode | null, nodes: TreeNode[]) {
	if (!root) return
	nodes.push(root)
	preOrderTraversal(root.left, nodes)
	preOrderTraversal(root.right, nodes)
}

function changeRightPointer(root: TreeNode | null, nodes: TreeNode[]) {
	for (let i = 1; i < nodes.length && root; i++) {
		root.left = null
		root.right = nodes[i]
		root = root.right
	}
	return
}

let root = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(3), new TreeNode(4)),
	new TreeNode(5, null, new TreeNode(6)),
)

console.log(flatten(root))

export {}
