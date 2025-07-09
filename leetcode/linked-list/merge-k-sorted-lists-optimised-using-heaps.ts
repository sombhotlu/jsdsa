class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

// galat code hain yeh.
class MinHeap {
	public values: [number, ListNode][]
	constructor() {
		this.values = []
	}

	insert(value: [number, ListNode]) {
		this.values.push(value)
		this.reorder(this.values.length - 1)
		return this
	}

	private reorder(index: number): void {
		if (!index) return

		let parentOfIndex = Math.floor((index - 1) / 2)
		let valueAtIndex = this.values[index]
		let valueAtParent = this.values[parentOfIndex]

		if (valueAtIndex[0] > valueAtParent[0]) return

		this.values[index] = valueAtParent
		this.values[parentOfIndex] = valueAtIndex

		return this.reorder(parentOfIndex)
	}

	extractMin() {
		let rootVal = this.values[0]
		this.values[0] = this.values[this.values.length - 1]
		this.values.length = this.values.length - 1
		this.sinkDown()
		return rootVal
	}

	sinkDown() {
		let rootIndex = 0
		let rootVal = this.values[0]

		while (
			rootVal?.[0] > this.values[2 * rootIndex + 1]?.[0] ||
			rootVal?.[0] > this.values[2 * rootIndex + 2]?.[0]
		) {
			let indexToBeSwapped
			if (this.values[2 * rootIndex + 1]?.[0] > this.values[2 * rootIndex + 2]?.[0]) {
				indexToBeSwapped = 2 * rootIndex + 2
			} else {
				indexToBeSwapped = 2 * rootIndex + 1
			}

			this.values[rootIndex] = this.values[indexToBeSwapped]
			this.values[indexToBeSwapped] = rootVal

			rootIndex = indexToBeSwapped
		}
	}
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
	if (!lists.length) return null

	let dummyNode: ListNode | null = new ListNode(-1)
	let temp = dummyNode
	let minHeap = new MinHeap()
	for (let i = 0; i < lists.length; i++) {
		if (lists[i]?.val !== null && lists[i]?.val !== undefined)
			minHeap.insert([lists[i]!.val, lists[i]!])
	}

	while (minHeap.values.length) {
		let minimumNodeFromHeap = minHeap.extractMin()
		if (minimumNodeFromHeap) {
			temp.next = minimumNodeFromHeap[1]
			if (minimumNodeFromHeap[1].next && minimumNodeFromHeap[1].next?.val !== null)
				minHeap.insert([minimumNodeFromHeap[1].next?.val, minimumNodeFromHeap[1]?.next])
			temp = temp.next
		}
	}

	return dummyNode.next
}

const root1 = new ListNode(-1, new ListNode(1))
const root2 = new ListNode(-3, new ListNode(1, new ListNode(4)))
const root3 = new ListNode(-2, new ListNode(-1, new ListNode(0, new ListNode(2))))

// const root1 = new ListNode(1, new ListNode(4, new ListNode(5)))
// const root2 = new ListNode(1, new ListNode(3, new ListNode(4)))
// const root3 = new ListNode(2, new ListNode(6))

console.log(mergeKLists([root1, root2, root3]))

export {}
