class ListNode {
	val: number
	next: ListNode | null

	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
	if (!head) return null

	let length = 1
	let node: ListNode | null = head
	while (node.next !== null) {
		length++
		node = node.next
	}
	node.next = head

	let position = length - (k % length)

	node = head

	let currentPositon = 1

	if (currentPositon <= position) {
		while (currentPositon < position && node !== null) {
			node = node.next
			currentPositon++
		}

		if (node?.next) {
			head = node.next
			node.next = null
		}
	}

	return head
}

let ll1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
let ll2 = new ListNode(0, new ListNode(1, new ListNode(2)))
let ll3 = new ListNode(1, new ListNode(2))
console.log(rotateRight(ll1, 2))
console.log(rotateRight(ll2, 4))
console.log(rotateRight(ll3, 2))
console.log(rotateRight(ll3, 5))

export {}
