class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
	if (!head) return head

	let prevNode: ListNode | null = head,
		currentNode = head.next,
		oldPrevious = null

	while (prevNode !== null && currentNode !== null) {
		if (prevNode.val === currentNode?.val) {
			while (prevNode.val === currentNode?.val) {
				currentNode = currentNode?.next ?? null
				prevNode.next = currentNode
			}
			if (head?.val === prevNode?.val) head = currentNode
			if (oldPrevious) oldPrevious.next = currentNode
		} else {
			oldPrevious = prevNode
		}

		prevNode = currentNode
		currentNode = currentNode?.next ?? null
	}

	return head
}

let ll1 = new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3)))))
let ll2 = new ListNode(
	1,
	new ListNode(
		2,
		new ListNode(3, new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5))))),
	),
)

// console.log(deleteDuplicates(ll1))
console.log(deleteDuplicates(ll2))

export {}
