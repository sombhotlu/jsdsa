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

function maxDepth(root: TreeNode | null): number {
	return root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0
}

function rightSideView(root: TreeNode | null): number[] {
	let result = [],
		stack = [],
		level = 1

	let maxDepthVal = maxDepth(root)

	while (result.length < maxDepthVal) {
		while (root) {
			if (level > result.length) result.push(root.val)
			level++

			stack.push(root)
			if (root.right) root = root.right
			else if (root.left) root = root.left
			else break
		}

		root = stack.pop() ?? null
		while (!root?.left && stack.length) {
			root = stack.pop() ?? null
		}

		if (root) {
			stack.push(root.left)
			root = root.left
		}

		level = stack.length + 1
	}

	return result
}

export {}
