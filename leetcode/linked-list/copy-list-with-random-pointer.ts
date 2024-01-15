/* 
    Logic traverse the List and create a new new array of nodes as given in the list
    Traverse the list again and attach the random value
*/

class Node {
	val: number
	next: Node | null
	random: Node | null
	constructor(val?: number, next?: Node, random?: Node) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
		this.random = random === undefined ? null : random
	}
}

function copyRandomList(head: Node | null): Node | null {
	if (head === null) return null

	let newHead = new Node(head?.val),
		currentNode = head?.next ?? null

	let myNodes = new Map()
	myNodes.set(head, newHead)

	while (currentNode !== null) {
		let newNode = new Node(currentNode.val)
		myNodes.set(currentNode, newNode)
		currentNode = currentNode.next
	}

	let oldNode: Node | null = head,
		newNode: Node | null = newHead

	while (oldNode && newNode) {
		newNode.next = oldNode.next ? myNodes.get(oldNode.next) : null
		newNode.random = myNodes.get(oldNode.random)
		oldNode = oldNode.next
		newNode = newNode.next
	}

	return newHead
}

// let node1 = new Node(1, new Node(2, new Node(3)))
// console.log(copyRandomList(node1))

export {}
