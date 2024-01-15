class ListNode {
	val: number
	next: ListNode | null

	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

function partition(head: ListNode | null, x: number): ListNode | null {
	if (!head) return null

	let prevNode: ListNode = new ListNode(0, head)

	while (prevNode.next && prevNode?.next.val < x) {
		prevNode = prevNode.next
	}

	let currentNode = prevNode?.next

	while (currentNode?.next) {
		while (currentNode?.next && currentNode?.next.val >= x) {
			currentNode = currentNode.next
		}

		if (currentNode.next) {
			if (prevNode.next === head) head = currentNode.next

			let temp = prevNode.next,
				temp1 = currentNode.next.next

			prevNode.next = currentNode.next
			currentNode.next.next = temp
			currentNode.next = temp1

			prevNode = prevNode.next
		}
	}

	return head
}

let ll1 = new ListNode(
	1,
	new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2))))),
)

let ll2 = new ListNode(2, new ListNode(1))

console.log(partition(ll1, 3))
console.log(partition(ll2, 2))

/* 
    Algorithm

    step 1:
    Go till the last node which is less than the x
    make that node as prevNode

    step 2:
    Now go till you find a node whose next node is less than x
    temp = prevNode.next
    Make that next node the next of prevNode
    & Now make that prevNode as the nextNode
    that nextNode.next = temp

    Go to step 2 and repeat the process.

*/

export {}
