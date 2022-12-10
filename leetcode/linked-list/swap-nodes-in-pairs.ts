// Definition for singly-linked list.

import {createWatchCompilerHost} from 'typescript'

class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

/* 
    general scenario

    handle head separately

    while 

    previous.next = current.next
    current.next = nextNode.next
    nextNode.next = current

    


*/

function swapPairs(head: ListNode | null): ListNode | null {
	let previousNode = null,
		currentNode = head,
		headAfterSwap = head?.next ?? null,
		nextNode = head?.next

	if (!head || !head?.next) return head

	if (currentNode) currentNode.next = nextNode?.next ?? null
	if (nextNode) nextNode.next = currentNode

	previousNode = currentNode
	currentNode = currentNode?.next ?? null
	nextNode = currentNode?.next

	while (previousNode && currentNode && nextNode) {
		previousNode.next = currentNode.next
		currentNode.next = nextNode.next
		nextNode.next = currentNode

		previousNode = currentNode
		currentNode = currentNode?.next
		nextNode = currentNode?.next
	}

	return headAfterSwap
}
