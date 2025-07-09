function isNStraightHand(hand: number[], groupSize: number): boolean {
	if (hand.length < groupSize * groupSize) return false

	// create a map of card and its count
	let map = new Map()

	for (let val of hand) {
		if (map.has(val)) map.set(val, map.get(val) + 1)
		else map.set(val, 1)
	}

	// then loop over the map and see

	const sortedMap = new Map([...map].sort())

	let group = 0,
		sizeOfGroup = 0,
		lengthOfFirst = 0

	console.log(sortedMap.size)

	while (group < groupSize && sortedMap.size) {
		let iterator = sortedMap.entries()
		let card = iterator.next()
		if (card.done) break

		let key = card.value[0]
		let length = card.value[1]
		console.log(key, length)
		// console.log(iterator.next())
		while (sizeOfGroup < groupSize && sortedMap.size) {
			console.log(key, length, sizeOfGroup)

			if (sizeOfGroup === 0) {
				lengthOfFirst = length
			}

			console.log(lengthOfFirst)
			if (length === lengthOfFirst) {
				sortedMap.delete(key)
			} else if (length > lengthOfFirst!) {
				sortedMap.set(key, length - lengthOfFirst)
			} else break

			sizeOfGroup++
			if (sortedMap.has(key + 1)) {
				key = key + 1
				length = sortedMap.get(key)!
			} else break
		}

		if (sizeOfGroup === groupSize) {
			group += lengthOfFirst
		}
		console.log(groupSize, sizeOfGroup, group)

		sizeOfGroup = 0
	}

	return group * group === groupSize * groupSize
}

console.log(isNStraightHand([1, 2, 3, 6, 5, 3, 4, 7, 8], 3))
// console.log(isNStraightHand([1, 2, 3, 4, 5], 4))
