class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

// class SinglyLinkedList {
// 	constructor(public head: ListNode | null = null, public tail: ListNode | null = null) {}
// }

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
	let head = null,
		newNode,
		prevNode
	while (list1 && list1.val !== undefined && list2 && list2.val !== undefined) {
		newNode = new ListNode()
		if (!head) {
			head = newNode
		}
		if (prevNode) {
			prevNode.next = newNode
		}

		if (list1.val > list2.val) {
			newNode.val = list2.val
			list2 = list2.next
		} else {
			newNode.val = list1.val
			list1 = list1.next
		}
		prevNode = newNode
	}

	if (list1 && list1.val !== undefined) {
		if (!newNode) {
			newNode = new ListNode(list1.val, list1.next)
			if (!head) {
				head = newNode
			}
		} else newNode.next = new ListNode(list1.val, list1.next)
	}

	if (list2 && list2.val !== undefined) {
		if (!newNode) {
			newNode = new ListNode(list2.val, list2.next)
			if (!head) {
				head = newNode
			}
		} else newNode.next = new ListNode(list2.val, list2.next)
	}

	return head
}

export {}
