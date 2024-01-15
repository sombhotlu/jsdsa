/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import {SinglyLinkedList} from '../../Singly_Linked_List'

class ListNode {
	val: number
	next: ListNode | null

	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

// class CreateLinkedList {
// 	constructor()
// }

function getLastValue(set) {
	let value = null
	for (value of set);
	return value
}

function createLinkedList(arr, loopIndexEnd) {
	let set = new Set()
	let node

	for (let i = 0; i < arr.length; i++) {
		node = new ListNode(val, getLastValue(set))
		set.add(node)
	}

	return node
}

// let node3 = new ListNode(4, null)
// let node2 = new ListNode(3, node3)
// let node1 = new ListNode(1, node2)

let node6 = new ListNode(6, null)
let node5 = new ListNode(3, node6)
let node4 = new ListNode(1, node5)

// console.log(createLinkedList([1, 2, 3], 2))

// METHOD: 1
/* 
	Add the nodes to set
	Traverse the linked List and check the head
	If the head is found in the Set then its a loop
	else its not a loop
*/

function hasCycle(head: ListNode | null): boolean {
	let obj = new Set()
	while (head) {
		if (!obj.has(head)) obj.add(head)
		head = head.next
	}

	if (head === null) return false
	else return true
}

let myList = new SinglyLinkedList()
myList.push(1)
myList.push(2)
myList.push(3)
myList.createLoop(1)

console.log('MyList _________>', myList)

console.log(hasCycle(myList))

function hasCycle2(head): boolean {
	let node1 = head,
		node2 = head?.next

	while (node1 && node2 && node1 !== node2) {
		node1 = node1.next
		node2 = node2.next?.next ?? null
	}

	if (node1 === node2) return true
	return false
}

export {}
