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

function isValidBST(root: TreeNode | null): boolean {
	return inorderTraversal(root)
}

function inorderTraversal(node: TreeNode | null): boolean {
	let nums: number[] = [],
		isBinaryTree = true

	function traverse(node: TreeNode | null) {
		if (node?.left) traverse(node.left)
		if (node) {
			if (nums.length > 0) {
				if (node.val <= nums[nums.length - 1]) {
					isBinaryTree = false
					return
				}
			}
			nums.push(node.val)
		}
		if (node?.right) traverse(node.right)
	}

	traverse(node)
	return isBinaryTree
}

let root = new TreeNode(
	5,
	new TreeNode(1, null, null),
	new TreeNode(4, new TreeNode(3), new TreeNode(6)),
)

console.log(isValidBST(root))

export {}
