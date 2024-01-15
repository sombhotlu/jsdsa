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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
	return getPathSum(root, targetSum, [], [])
}

function getPathSum(
	root: TreeNode | null,
	targetSum: number,
	path: number[],
	paths: number[][],
): number[][] {
	if (!root) return paths

	path = path.concat(root.val)

	if (targetSum - root.val === 0 && !root.left && !root.right) {
		paths.push(path)
		return paths
	}

	getPathSum(root?.left, targetSum - root.val, path, paths)
	getPathSum(root?.right, targetSum - root.val, path, paths)

	return paths
}

let root = new TreeNode(
	5,
	new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
	new TreeNode(8, new TreeNode(13), new TreeNode(4, new TreeNode(5), new TreeNode(1))),
)

console.log(pathSum(root, 22))

export {}
