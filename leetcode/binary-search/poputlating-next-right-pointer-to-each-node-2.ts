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
	if (!root) return root

	let head: Node | null = root

	while (head) {
		let temp = new Node(0),
			dummy = temp

		while (head) {
			if (head.left) {
				temp.next = head.left
				temp = temp.next
			}
			if (head.right) {
				temp.next = head.right
				temp = temp.next
			}
			head = head.next
		}

		head = dummy.next
	}

	return root
}

export {}

let root = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3, undefined, new Node(7)))
connect(root)
console.log(root.left?.right?.next, '<--------------------->', root.right)
