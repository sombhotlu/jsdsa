function binarSearch(weights: number[], low: number, high: number, days: number): number {
	let mid: number = 0,
		lastSuccess = high
	while (low <= high) {
		low
		high
		mid = Math.floor((low + high) / 2)
		let day = 0,
			sum = 0

		for (let i = 0; i < weights.length; i++) {
			if (day + 1 > days) break

			if (sum + weights[i] <= mid) {
				sum += weights[i]
			} else {
				sum = weights[i]
				day++
			}
		}

		if (day + 1 <= days) {
			lastSuccess = mid
			high = mid - 1
		} else low = mid + 1
	}

	return lastSuccess
}

function shipWithinDays(weights: number[], days: number): number {
	return binarSearch(
		weights,
		Math.max(...weights),
		weights.reduce((acc, cur) => acc + cur, 0),
		days,
	)
}

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))
console.log(shipWithinDays([10, 50, 100, 100, 50, 100, 100, 100], 5))
console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3))
console.log(shipWithinDays([1, 2, 3, 1, 1], 4))
