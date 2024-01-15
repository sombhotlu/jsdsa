class Node {
	val: number
	left: Node | null
	right: Node | null
	next: Node | null
	constructor(val?: number, left?: Node, right?: Node, next?: Node) {
		this.val = val === undefined ? 0 : val
		this.left = left === undefined ? null : left
		this.right = right === undefined ? null : right
		this.next = next === undefined ? null : next
	}
}

function connect(root: Node | null): Node | null {
	makeRightConnections(root)
	return root
}

function makeRightConnections(root: Node | null | undefined): void {
	if (!root?.left) return

	root.left.next = root.right
	makeMiddleConnections(root?.left, root?.right as Node)
	makeRightConnections(root?.left)
	makeRightConnections(root?.right)
	return
}

function makeMiddleConnections(leftNode: Node | null, rightNode: Node | null): void {
	while (leftNode?.right) {
		leftNode.right.next = rightNode?.left as Node
		leftNode = leftNode?.right
		rightNode = rightNode?.left as Node
	}
	return
}

export {}

let root = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3, new Node(6), new Node(7)))
console.log(connect(root))
