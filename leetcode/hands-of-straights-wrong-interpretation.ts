function isNStraightHand(hand: number[], groupSize: number): boolean {
	if (hand.length % groupSize !== 0) return false

	let countOfEachNumber = new Map()

	for (let val of hand) {
		if (countOfEachNumber.has(val)) {
			countOfEachNumber.set(val, countOfEachNumber.get(val) + 1)
		} else {
			countOfEachNumber.set(val, 1)
		}
	}

	const sortedMap = new Map([...countOfEachNumber].sort((val1, val2) => val1[0] - val2[0]))

	let sizeOfGroup = 0,
		lengthOfFirst = 0

	while (sortedMap.size) {
		let [key, length] = sortedMap.entries().next().value

		while (sizeOfGroup < groupSize && sortedMap.size) {
			if (sizeOfGroup === 0) {
				lengthOfFirst = length
			}

			if (length === lengthOfFirst) {
				sortedMap.delete(key)
			} else if (length > lengthOfFirst!) {
				sortedMap.set(key, length - lengthOfFirst)
			} else return false

			sizeOfGroup++
			if (sortedMap.has(key + 1)) {
				key = key + 1
				length = sortedMap.get(key)!
			} else break
		}

		if (sizeOfGroup !== groupSize) {
			return false
		} else sizeOfGroup = 0
	}

	return true
}

// console.log(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3))
// console.log(isNStraightHand([8, 10, 12], 3))
// console.log(isNStraightHand([1, 2, 3, 4, 5], 4))
// console.log(isNStraightHand([8, 8, 9, 7, 7, 7, 6, 7, 10, 6], 2))
console.log(isNStraightHand([3, 4, 7, 4, 6, 3, 6, 5, 2, 8], 2))

export {}
