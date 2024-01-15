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

function* inorderTraversal(root: TreeNode | null) {
	if (root) {
		if (root?.left) yield* inorderTraversal(root.left)
		if (!root?.left && !root?.right) yield root?.val
		if (root?.right) yield* inorderTraversal(root?.right)
	}
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
	if (root1 === root2) return true

	let leafs1 = inorderTraversal(root1)
	let leafs2 = inorderTraversal(root2)

	let leaf1, leaf2

	while (true) {
		leaf1 = leafs1.next()
		leaf2 = leafs2.next()

		if (leaf1.value === undefined || leaf2.value === undefined) break
		if (leaf1.value !== leaf2.value) return false
	}

	return !!leaf1.done && !!leaf2.done
}

let root1 = new TreeNode(
	3,
	new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), new TreeNode(4))),
	new TreeNode(1, new TreeNode(9), new TreeNode(8)),
)
let root2 = new TreeNode(
	3,
	new TreeNode(5, new TreeNode(6), new TreeNode(7)),
	new TreeNode(1, new TreeNode(4), new TreeNode(2, new TreeNode(9), new TreeNode(8))),
)

let root3 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
let root4 = new TreeNode(1, new TreeNode(3), new TreeNode(2))

console.log(leafSimilar(root1, root2))
console.log(leafSimilar(root3, root4))

export {}
