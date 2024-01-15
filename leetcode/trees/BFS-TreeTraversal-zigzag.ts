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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
	if (!root) return []

	let queue = [root]
	let result = []
	let nodesInALevel = queue.length,
		levelNodes = [],
		count = 0,
		zigzag = true

	while (queue.length) {
		zigzag = !zigzag
		while (count < nodesInALevel) {
			let node = queue.shift()
			if (node) {
				levelNodes.push(node.val)
				if (node.left) queue.push(node.left)
				if (node.right) queue.push(node.right)
			}

			count++
		}

		result.push(zigzag ? levelNodes.reverse() : levelNodes)
		levelNodes = []
		count = 0
		nodesInALevel = queue.length
	}

	return result
}

let root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))

console.log(zigzagLevelOrder(root))

export {}
