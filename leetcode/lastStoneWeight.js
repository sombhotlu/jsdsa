var lastStoneWeight = function (stones) {
	stones.sort((a, b) => a - b)
	console.log(stones)

	while (stones.length > 1) {
		let lastElement = stones.pop()
		let secondLastElement = stones.pop()

		let difference = Math.abs(lastElement - secondLastElement)
		stones.splice(sortedIndex(stones, difference), 0, difference)
	}

	return stones[0]
}

function sortedIndex(array, value) {
	var low = 0,
		high = array.length

	while (low < high) {
		var mid = (low + high) >>> 1
		if (array[mid] < value) low = mid + 1
		else high = mid
	}
	return low
}

console.log(lastStoneWeight([9, 10, 1, 7, 3]))
