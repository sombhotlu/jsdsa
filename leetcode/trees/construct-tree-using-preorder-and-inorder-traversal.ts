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

/* 
    Logic is use
    preorder for finding the root element first
    and use inorder to do the left and the right subtrees
*/

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
	if (preorder.length === 0) return null

	let root = preorder[0]

	let indexOfRoot = inorder.indexOf(root)
	let leftSubtree = inorder.slice(0, indexOfRoot)
	let rightSubtree = inorder.slice(indexOfRoot + 1)

	return new TreeNode(
		root,
		buildTree(preorder.slice(1, indexOfRoot + 1), leftSubtree),
		buildTree(preorder.slice(indexOfRoot + 1), rightSubtree),
	)
}

export {}
