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

class BSTIterator {
	private inorderStack: TreeNode[] = []

	constructor(root: TreeNode | null) {
		this.push(root)
	}

	push(node: TreeNode | null): void {
		while (node) {
			this.inorderStack.push(node)
			node = node.left
		}
	}

	next(): number {
		let node = this.inorderStack.length ? this.inorderStack.pop() : null
		if (node) {
			this.push(node.right)
		}
		return node?.val ?? 0
	}

	hasNext(): boolean {
		return !!this.inorderStack.length
	}
}

let root = new TreeNode(7, new TreeNode(3), new TreeNode(15, new TreeNode(9), new TreeNode(20)))

const obj = new BSTIterator(root)
console.log(obj.next())
console.log(obj.hasNext())
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())
