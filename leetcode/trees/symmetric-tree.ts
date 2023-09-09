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

function isSymmetric(root: TreeNode | null): boolean {
	if (!root) return true
	return isMirror(root.left, root.right)
}

function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
	if (!left && !right) return true
	if (!left || !right) return false

	return (
		left.val === right.val &&
		isMirror(left.left, right.right) &&
		isMirror(left.right, right.left)
	)
}

function inorderTraversal(node: TreeNode | null, nums: (number | null)[]): (number | null)[] {
	if (node?.left || node?.right) {
		nums.concat(inorderTraversal(node.left, nums))
		nums.push(node.val)
		nums.concat(inorderTraversal(node.right, nums))
		return nums
	}

	nums.push(node?.val ?? null)
	return nums
}

// const root = new TreeNode(
// 	1,
// 	new TreeNode(2, null, new TreeNode(3)),
// 	new TreeNode(2, null, new TreeNode(3)),
// )
// const root = new TreeNode(
// 	5,
// 	new TreeNode(4, null, new TreeNode(1, new TreeNode(2), null)),
// 	new TreeNode(1, null, new TreeNode(4, new TreeNode(2), null)),
// )
const root = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(3), new TreeNode(4)),
	new TreeNode(2, new TreeNode(4), new TreeNode(3)),
)

// console.log(inorderTraversal(root, []))
console.log(isSymmetric(root))

export {}
