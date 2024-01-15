class LL_Node {
	constructor(public val: unknown, public next: LL_Node | null = null) {}
}

class SinglyLinkedList {
	constructor(
		private head: LL_Node | null = null,
		private tail: LL_Node | null = null,
		private length: number = 0,
	) {}

	public push(val: unknown) {
		let node = new LL_Node(val)
		if (this.head === null || this.tail === null) {
			this.head = node
			this.tail = node
		} else {
			this.tail.next = node
			this.tail = node
		}
		this.length++
		return this
	}

	/* 
		Traverse
	*/

	public traverse(val: unknown) {
		let currentNode = this.head
		let prevNode = null
		while (currentNode && currentNode.val !== val) {
			prevNode = currentNode
			currentNode = currentNode.next
		}
		return [prevNode, currentNode]
	}

	/**
	 * pop
	 */
	public pop(val: unknown) {
		let currentNode = this.head
		if (!currentNode) {
			throw new Error('Linked List is empty')
		}

		let prevNode = null
		while (currentNode !== null && val !== currentNode.val && currentNode !== this.tail) {
			prevNode = currentNode
			currentNode = currentNode.next
		}
		if (currentNode && currentNode.val !== val) {
			throw new Error('Value not found to be removed')
		}

		if (currentNode && currentNode.val === val) {
			if (this.head === this.tail) {
				this.head = null
				this.tail = null
			} else if (this.head === currentNode) {
				this.head = this.head.next
			} else if (prevNode !== null)
				if (this.tail === currentNode) {
					prevNode.next = null
					this.tail = prevNode
				} else {
					prevNode.next = currentNode.next
				}
			this.length--
		}
		return this
	}

	public actualPop() {
		let currentNode = this.head
		let prevNode = null

		if (currentNode === null) throw new Error('No Nodes in the list to be removed')

		while (currentNode !== this.tail) {
			prevNode = currentNode
			currentNode = currentNode?.next ?? null
		}

		if (this.head === this.tail) {
			this.head = null
			this.tail = null
		} else if (prevNode) {
			prevNode.next = null
			this.tail = prevNode
		}

		this.length--
		return currentNode
	}

	public shift() {
		if (!this.head) throw new Error('No items to be removed')
		let removedNode = this.head
		this.head = this.head.next
		this.length--
		return removedNode
	}

	public reverse() {
		if (!this.length) throw new Error('Nothing to reverse as no nodes present')

		let prevNode = this.head
		this.tail = prevNode

		let currentNode = prevNode.next
		let nextNode = null
		while (currentNode.next !== null) {
			nextNode = currentNode.next
			currentNode.next = prevNode
			prevNode = currentNode
			currentNode = nextNode
		}
		this.head = currentNode
		this.head.next = prevNode
		this.tail.next = null

		return this
	}

	public createLoop(indexTo: number) {
		let i = 0
		let currentNode: typeof this.head = this.head
		while (i < indexTo && currentNode) {
			currentNode = currentNode.next
			i++
		}

		if (!currentNode) return false
		if (this.tail) this.tail.next = currentNode
	}
}

const LL = new SinglyLinkedList()
// console.log(LL)
// console.log(LL.push('Hi'))
// console.log(LL.push('Hello'))
// console.log(LL.push('Hellosss'))
// console.log(LL.pop("Hi"));
// console.log(LL.actualPop())
// console.log(LL.shift())
// console.log(LL.reverse())
// console.log(LL)

export {SinglyLinkedList}
