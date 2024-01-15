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

// function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
// 	if (postorder.length === 1) return new TreeNode(postorder[0])

// 	let rootVal = postorder.pop()
// 	if (typeof rootVal !== 'number') return null
// 	let indexOfRootVal = inorder.indexOf(rootVal)
// 	let leftTreeInorderVals = inorder.slice(0, indexOfRootVal)

// 	return new TreeNode(
// 		rootVal,
// 		buildTree(leftTreeInorderVals, postorder.slice(0, leftTreeInorderVals.length)),
// 		buildTree(inorder.slice(indexOfRootVal + 1), postorder.slice(leftTreeInorderVals.length)),
// 	)
// }

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
	let inorderMap = new Map()

	for (let i = 0; i < inorder.length; i++) {
		inorderMap.set(inorder[i], i)
	}

	return buildTreeFromInorderPostOrder(
		inorder,
		0,
		inorder.length - 1,
		postorder,
		0,
		postorder.length - 1,
		inorderMap,
	)
}

function buildTreeFromInorderPostOrder(
	inorder: number[],
	is: number,
	ie: number,
	postorder: number[],
	ps: number,
	pe: number,
	inorderMap: Map<number, number>,
): TreeNode | null {
	if (ps > pe || is > ie) return null

	let root = new TreeNode(postorder[pe])

	let indexOfRoot = inorderMap.get(postorder[pe])
	let numsLeft = indexOfRoot! - is

	root.left = buildTreeFromInorderPostOrder(
		inorder,
		is,
		indexOfRoot! - 1,
		postorder,
		ps,
		ps + numsLeft - 1,
		inorderMap,
	)

	root.right = buildTreeFromInorderPostOrder(
		inorder,
		indexOfRoot! + 1,
		ie,
		postorder,
		ps + numsLeft,
		pe - 1,
		inorderMap,
	)

	return root
}

let inorder = [9, 3, 15, 20, 7],
	postorder = [9, 15, 7, 20, 3]

console.log(buildTree(inorder, postorder))
