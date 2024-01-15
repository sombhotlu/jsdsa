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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
	if (!lists.length) return null

	let finalList: ListNode | null = lists[0]
	for (let i = 0; i < lists.length; i++) {
		finalList = mergeSortedList(finalList, lists[i])
	}

	return finalList
}

export {}
