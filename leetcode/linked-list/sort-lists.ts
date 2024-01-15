class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

function mergeSortedList(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	if (!l1 && !l2) return null

	let dummyNode = new ListNode()
	let temp = dummyNode

	while (l1 && l2) {
		if (l1.val < l2.val) {
			temp.next = l1
			temp = l1
			l1 = l1.next
		} else {
			temp.next = l2
			temp = l2
			l2 = l2.next
		}
	}

	if (l1) {
		temp.next = l1
	} else {
		temp.next = l2
	}

	return dummyNode.next
}

function findMiddle(node: ListNode | null) {
	let slow = node
	let fast = node?.next
	while (fast && fast.next) {
		slow = slow?.next ?? null
		fast = fast.next.next
	}

	return slow
}

function sortList(head: ListNode | null): ListNode | null {
	if (head === null || head.next === null) return head

	let midNode = findMiddle(head)
	let otherHalf = midNode?.next ?? null
	if (midNode) midNode.next = null

	let leftList = sortList(head)
	let rightList = sortList(otherHalf)

	return mergeSortedList(leftList, rightList)
}

export {}
