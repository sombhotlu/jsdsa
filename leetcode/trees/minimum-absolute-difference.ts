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

// function getMinimumDifference(root: TreeNode | null): number {
// 	let nums: number[] = [],
// 		minNum = Number.MAX_SAFE_INTEGER

// 	function traverse(node: TreeNode | null) {
// 		if (node?.left) traverse(node.left)
// 		if (node) nums.push(node.val)
// 		if (node?.right) traverse(node.right)
// 	}

// 	traverse(root)

// 	let i = 1
// 	while (i < nums.length) {
// 		minNum = Math.min(nums[i] - nums[i - 1], minNum)
// 		i++
// 	}

// 	return minNum
// }

function getMinimumDifference(root: TreeNode | null): number {
	let prevNum: number,
		minNum = Number.MAX_SAFE_INTEGER

	function traverse(node: TreeNode | null) {
		if (node?.left) traverse(node.left)
		if (node) {
			if (prevNum || prevNum === 0) {
				minNum = Math.min(node.val - prevNum, minNum)
			}
			prevNum = node.val
		}
		if (node?.right) traverse(node.right)
	}

	traverse(root)

	return minNum
}

const root = new TreeNode(
	0,
	null,
	new TreeNode(2235, new TreeNode(1277, new TreeNode(519), null), new TreeNode(2776)),
)

// [(0, null, 2236, 1277, 2776, 519)]

console.log(getMinimumDifference(root))

export {}
