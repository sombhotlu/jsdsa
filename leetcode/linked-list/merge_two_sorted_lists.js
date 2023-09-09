/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
	let newNode, prevNode
	while (list1 && list1.val !== undefined && list2 && list2.val !== undefined) {
		newNode = new ListNode()
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
		newNode.next = new ListNode(list1.val, list1.next)
	}

	if (list2 && list2.val !== undefined) {
		newNode.next = new ListNode(list2.val, list2.next)
	}

	return newNode
}
