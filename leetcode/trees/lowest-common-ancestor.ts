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

function lowestCommonAncestor(
	root: TreeNode | null,
	p: TreeNode | null,
	q: TreeNode | null,
): TreeNode | null {
	if (!root) return null

	if (root === p || root === q) return root

	let leftNode = lowestCommonAncestor(root.left, p, q)
	let rightNode = lowestCommonAncestor(root.right, p, q)

	if ((leftNode === p && rightNode === q) || (rightNode === p && leftNode === q)) return root
	return leftNode || rightNode
}

let p = new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), new TreeNode(4)))
let q = new TreeNode(1, new TreeNode(0), new TreeNode(8))

let root = new TreeNode(3, p, q)

// let p = new TreeNode(6)
// let q = new TreeNode(4)

// let root = new TreeNode(
// 	3,
// 	new TreeNode(5, p, new TreeNode(2, new TreeNode(7), q)),
// 	new TreeNode(1, new TreeNode(0), new TreeNode(8)),
// )

console.log(lowestCommonAncestor(root, p, q))

export {}
