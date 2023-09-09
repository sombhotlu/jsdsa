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

class ListNode {
	val: number
	next: ListNode | null

	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

let node3 = new ListNode(4, null)
let node2 = new ListNode(3, node3)
let node1 = new ListNode(1, node2)

let node6 = new ListNode(6, null)
let node5 = new ListNode(3, node6)
let node4 = new ListNode(1, node5)

console.log(node1 === node4)

// function hasCycle(head: ListNode | null): boolean {
//     let obj = new Map()
//     while (head) {
//         if (!obj.has(head.val))
//             obj.

//     }

//     if (head === null)
//         return false
//     else return true
// }

export {}
