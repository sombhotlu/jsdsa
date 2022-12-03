class Node {
	next: Node
	prev: Node
	constructor(public val) {
		this.val = val
		this.next = null
		this.prev = null
	}
}

class DoublyLinkedList {
    public head: Node | null
    public tail: Node | null
    public length: number
	constructor() {
         this.head = null,
		 this.tail = null,
		 this.length = 0,
    }
}
