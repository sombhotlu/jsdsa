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

function createBinaryTree(descriptions: number[][]): TreeNode | null {
	let map = new Map<number, TreeNode>()

	let rootSet = new Set<number>()

	for (let description of descriptions) {
		let parentNode = addNodeToMap(map, description[0])

		let childTreeNode = addNodeToMap(map, description[1])
		rootSet.add(description[1])

		parentNode[description[2] ? 'left' : 'right'] = childTreeNode
	}

	for (let [root] of descriptions) {
		if (!rootSet.has(root)) return map.get(root)!
	}

	return null
}

function addNodeToMap(map: Map<number, TreeNode>, value: number): TreeNode {
	let node
	if (map.has(value)) {
		node = map.get(value)!
	} else {
		node = new TreeNode(value)
		map.set(value, node)
	}

	return node
}

console.log(
	createBinaryTree([
		[20, 15, 1],
		[20, 17, 0],
		[50, 20, 1],
		[50, 80, 0],
		[80, 19, 1],
	]),
)

console.log(
	createBinaryTree([
		[1, 2, 1],
		[2, 3, 0],
		[3, 4, 1],
	]),
)

console.log(
	createBinaryTree([
		[85, 82, 1],
		[74, 85, 1],
		[39, 70, 0],
		[82, 38, 1],
		[74, 39, 0],
		[39, 13, 1],
	]),
)

console.log(
	createBinaryTree([
		[85, 74, 0],
		[38, 82, 0],
		[39, 70, 0],
		[82, 85, 0],
		[74, 13, 0],
		[13, 39, 0],
	]),
)
