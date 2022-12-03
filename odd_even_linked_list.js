var oddEvenList = function (head) {
	let oddHead = head,
		tempOddNode = head,
		evenHead = head.next,
		tempEvenNode = head.next

	if (!head) return null

	if (!head.next || !head.next.next) return head

	while (tempOddNode !== null && tempEvenNode !== null) {
		if (tempEvenNode.next) {
			tempOddNode.next = tempEvenNode.next
			tempOddNode = tempOddNode.next

			if (tempEvenNode.next.next) {
				tempEvenNode.next = tempEvenNode.next.next
				tempEvenNode = tempEvenNode.next
			}
		}
	}

	tempOddNode.next = evenHead

	return head
}
