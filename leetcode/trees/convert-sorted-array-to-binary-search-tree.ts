import {tokenToString} from 'typescript'

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

function sortedArrayToBST(nums: number[]): TreeNode | null {
	let totalLength = nums.length

	if (totalLength === 0) return null

	let height = Math.floor((totalLength - 1) / 2)

	return new TreeNode(
		nums[height],
		sortedArrayToBST(nums.slice(0, height)),
		sortedArrayToBST(nums.slice(height + 1)),
	)
}

/* 
    Algorithm
    totalLength -1 / 2 is the height

    Left portion becomes left subtree and right portion becomes right subtree
    follow the process recursively till the tree is built out

*/

// let root = new TreeNode(5, new TreeNode(2, new TreeNode(-4)), new TreeNode(7, new TreeNode(6), new TreeNode(8)))

console.log(sortedArrayToBST([-4, 2, 5, 6, 7, 8]))

export {}
