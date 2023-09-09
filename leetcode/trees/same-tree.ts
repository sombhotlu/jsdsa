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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
	let nodesOfP = BFS(p),
		nodesOfQ = BFS(q)

	let lengthOfP = nodesOfP.length,
		lengthOfQ = nodesOfQ.length

	if (lengthOfP !== lengthOfQ) return false
	let i = 0
	while (i < lengthOfP) {
		if (nodesOfP[i] !== nodesOfQ[i]) return false
		i++
	}
	return i === lengthOfP && i === lengthOfQ
}

function BFS(t: TreeNode | null): number[] {
	let queue: (TreeNode | null | undefined)[] = [t],
		data = []

	while (queue.length) {
		let node = queue.shift()
		data.push(node?.val ?? 0)
		if (node !== undefined) queue.push(node?.left)
		if (node !== undefined) queue.push(node?.right)
	}

	return data
}

function treeTraversal(t: TreeNode | null, nodes: number[]): number[] {
	while (t?.left || t?.right) {
		nodes.concat(treeTraversal(t.left, nodes))
		nodes.push(t.val || 0)
		nodes.concat(treeTraversal(t.right, nodes))
		return nodes
	}

	nodes.push(t?.val || 0)
	return nodes
}

let root = new TreeNode(1, new TreeNode(2), new TreeNode(3))
let root1 = new TreeNode(1, new TreeNode(), new TreeNode(3))
let root2 = new TreeNode(1, null, new TreeNode(1))
let root3 = new TreeNode(1, new TreeNode(1))

console.log(treeTraversal(root3, []))

console.log(isSameTree(root2, root3))

export {}
