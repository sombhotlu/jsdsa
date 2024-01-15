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

function averageOfLevels(root: TreeNode | null): number[] {
	if (!root) return []

	let queue = [root]
	let result = []

	while (queue.length) {
		let nodesInALevel = queue.length,
			count = 0,
			sum = 0

		for (let i = 0; i < nodesInALevel; i++) {
			let node = queue.shift()
			if (node) {
				sum += node.val
				count++
				if (node.left) queue.push(node.left)
				if (node.right) queue.push(node.right)
			}
		}

		result.push(Number((sum / count).toFixed(5)))
	}

	return result
}
