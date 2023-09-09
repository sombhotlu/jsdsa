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

function invertTree(root: TreeNode | null): TreeNode | null {
	let stack = [root]

	while (stack.length) {
		let node = stack.pop(),
			leftNode = node?.left ?? null,
			rightNode = node?.right ?? null

		if (node) {
			node.left = rightNode
			node.right = leftNode
			stack.push(leftNode)
			stack.push(rightNode)
		}
	}

	return root
}

let root = new TreeNode(
	4,
	new TreeNode(2, new TreeNode(1), new TreeNode(3)),
	new TreeNode(7, new TreeNode(6), new TreeNode(9)),
)

console.log(invertTree(root))

export {}
