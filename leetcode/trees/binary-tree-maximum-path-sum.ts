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

function maxPathSum(root: TreeNode | null): number {
	if (!root) return 0

	let globalSum = -1000
	function maxSum(root: TreeNode): number {
		if (!root.left && !root.right) {
			globalSum = Math.max(globalSum, root.val)
			return root.val
		}

		let leftSum = root?.left ? maxSum(root.left) : 0
		let rightSum = root?.right ? maxSum(root.right) : 0

		let pathMax = Math.max(leftSum + root.val, rightSum + root.val, root.val)
		globalSum = Math.max(globalSum, pathMax, root.val + leftSum + rightSum)

		return pathMax
	}

	maxSum(root)
	return globalSum
}
