class BST_Node {
	public left: BST_Node = null
	public right: BST_Node = null
	public value: any
	constructor(value) {
		this.value = value
	}
}

class BST {
	public root: BST_Node = null
	constructor() {}

	/**
	 * insert
	 */
	public insert(value) {
		const newNode = new BST_Node(value)
		let currentNode = this.root

		if (!currentNode) {
			this.root = newNode
			return this
		}

		while (
			(value < currentNode.value && currentNode.left !== null) ||
			(value > currentNode.value && currentNode.right !== null)
		) {
			if (value < currentNode.value && currentNode.left !== null) {
				currentNode = currentNode.left
			}

			if (value > currentNode.value && currentNode.right !== null) {
				currentNode = currentNode.right
			}
		}

		if (value < currentNode.value) currentNode.left = newNode
		if (value > currentNode.value) currentNode.right = newNode

		return this
	}

	/* 
	All my node traversal techniques are waste because they are not efficient

*/

	/**
	 * bfs
	 */
	public bfs() {
		let queue = []
		let visited = []

		let currentNode = this.root
		queue.push(currentNode)

		while (queue.length) {
			let node = queue.shift()
			visited.push(node.value)
			if (node.left) queue.push(node.left)
			if (node.right) queue.push(node.right)
		}

		return visited
	}

	/**
	 * dfsPostOrder
	 */
	public dfsPostOrder() {
		let stack = []
		let visited = []
		let currentNode = this.root
		stack.push(currentNode)
		this.postOrderTraversal(stack, visited)
		return visited
	}

	private postOrderTraversal(stack, visited) {
		while (stack.length) {
			let node = stack[stack.length - 1]

			if (node.left) {
				stack.push(node.left)
				this.postOrderTraversal(stack, visited)
			}
			if (node.right) {
				stack.push(node.right)
				this.postOrderTraversal(stack, visited)
			}

			if (stack.length) {
				visited.push(stack.pop().value)
			}

			return
		}
	}

	/**
	 * dfsInOrder
	 */
	public dfsInOrder() {
		let stack = []
		let visited = []
		let currentNode = this.root
		stack.push(currentNode)
		this.inOrderTraversal(stack, visited)
		return visited
	}

	private inOrderTraversal(stack, visited) {
		while (stack.length) {
			let node = stack[stack.length - 1]

			if (node.left) {
				stack.push(node.left)
				this.inOrderTraversal(stack, visited)
			} else if (stack.length) {
				visited.push(stack.pop().value)
			}

			if (node.right) {
				stack.push(node.right)
				this.inOrderTraversal(stack, visited)
			} else if (stack.length) {
				visited.push(stack.pop().value)
			}

			return
		}
	}

	/**
	 * dfsPreOrder
	 */
	public dfsPreOrder() {
		let queue = []
		let visited = []

		let currentNode = this.root
		queue.push(currentNode)
		this.preOrderTraversal(queue, visited)
		return visited
	}

	private preOrderTraversal(queue, visited) {
		while (queue.length) {
			let node = queue.shift()
			visited.push(node.value)

			if (node.left) {
				queue.push(node.left)
				this.preOrderTraversal(queue, visited)
			}

			if (node.right) {
				queue.push(node.right)
				this.preOrderTraversal(queue, visited)
			}

			return
		}
	}
}

let tree = new BST()
// tree.root = new BST_Node(10)
// tree.root.left = new BST_Node(5)
// tree.root.right = new BST_Node(15)

tree.insert(10)
tree.insert(15)
tree.insert(14)
tree.insert(7)
tree.insert(8)
tree.insert(5)
tree.insert(20)
tree.insert(19)
tree.insert(25)

// console.log('The value of tree is -->', tree.bfs())
console.log('The value of tree is -->', tree.dfsPreOrder())
console.log('The value of tree is -->', tree.dfsPostOrder())
console.log('The value of tree is -->', tree.dfsInOrder())
