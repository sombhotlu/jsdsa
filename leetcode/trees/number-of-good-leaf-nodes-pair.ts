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

function countPairs(root: TreeNode | null, distance: number): number {
	let result = 0

	function dfs(node: TreeNode | null): Array<number> {
		if (!node) return []

		let leftList = dfs(node.left)
		let rightList = dfs(node.right)

		if (!node?.left && !node?.right) return [1]

		// calculate result
		for (let d1 of leftList) {
			for (let d2 of rightList) {
				if (d1 + d2 <= distance) result += 1
			}
		}

		// merge the list
		return leftList
			.concat(rightList)
			.map((val) => val + 1)
			.filter((val) => val < distance)
	}

	dfs(root)

	return result
}

let root1 = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(4), new TreeNode(5)),
	new TreeNode(3, new TreeNode(6), new TreeNode(7)),
)

let root2 = new TreeNode(1, new TreeNode(2, null, new TreeNode(4)), new TreeNode(3))

console.log(countPairs(root1, 3))
console.log(countPairs(root2, 3))
