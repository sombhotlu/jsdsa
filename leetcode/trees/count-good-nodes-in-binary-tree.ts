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

function goodNodes(root: TreeNode): number {
	function preOrderTraversal(root: TreeNode | null, maxVal: number): number {
		if (!root) return 0

		let result = 0
		if (root.val >= maxVal) {
			maxVal = root.val
			result = 1
		}
		result += preOrderTraversal(root?.left, maxVal)
		result += preOrderTraversal(root.right, maxVal)
		return result
	}

	return preOrderTraversal(root, Number.NEGATIVE_INFINITY)
}

let root1 = new TreeNode(2, new TreeNode(9), new TreeNode(1))
let root2 = new TreeNode(
	5,
	new TreeNode(3, null, new TreeNode(3, new TreeNode(5))),
	new TreeNode(4, null, new TreeNode(5)),
)
console.log(goodNodes(root1))
console.log(goodNodes(root2))

export {}
