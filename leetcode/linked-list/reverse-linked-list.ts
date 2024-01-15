class ListNode {
	val: number
	next: ListNode | null

	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
	if (!head || left === right) return head

	let rotationsRequired =
		(right - left) % 2 === 0 ? (right - left) / 2 : Math.floor((right - left) / 2) + 1

	let nodes: (ListNode | null)[] = []

	let currentIndex = 1,
		node: ListNode | null = head

	while (currentIndex < left - 1) {
		node = node?.next ?? null
		currentIndex++
	}

	while (currentIndex <= left + rotationsRequired - 1) {
		nodes.push(node)
		node = node?.next ?? null
		currentIndex++
	}

	let curNode = nodes.pop() ?? null,
		prevNode = nodes.pop() ?? null

	if ((right - left) % 2 === 0) node = node?.next ?? null

	let firstTime = true,
		prevForNext = (right - left) % 2 === 0 ? curNode?.next : null

	while (rotationsRequired) {
		let nextNode = node?.next ?? null

		if (prevNode) prevNode.next = node
		if (node)
			node.next = firstTime && (right - left) % 2 !== 0 ? curNode : curNode?.next ?? null
		firstTime = false

		if (prevForNext) prevForNext.next = curNode
		if (curNode) curNode.next = nextNode
		if (curNode === head) head = node

		prevForNext = curNode
		curNode = prevNode
		prevNode = nodes.pop() ?? null
		node = nextNode ?? null
		rotationsRequired--
	}

	return head
}

// let ll1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
// console.log(reverseBetween(ll1, 2, 4))
let ll1 = new ListNode(
	1,
	new ListNode(
		2,
		new ListNode(
			3,
			new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8))))),
		),
	),
)
console.log(reverseBetween(ll1, 2, 6))
