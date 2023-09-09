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

function kthSmallest(root: TreeNode | null, k: number): number {
	let nums = inorderTraversal(root, k)
	console.log(nums)

	return nums[k - 1]
}

function inorderTraversal(node: TreeNode | null, k: number): number[] {
	let nums: number[] = [],
		i = 0

	function traverse(node: TreeNode | null) {
		if (node?.left) traverse(node.left)
		if (i < k && node) {
			nums.push(node.val)
			i++
		} else if (i === k) return nums
		if (node?.right) traverse(node.right)
		return nums
	}

	traverse(node)
	return nums
}

let root = new TreeNode(
	5,
	new TreeNode(3, new TreeNode(2, new TreeNode(1), null), new TreeNode(4)),
	new TreeNode(6, null, null),
)

console.log(kthSmallest(root, 3))

export {}
