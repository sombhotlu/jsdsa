function findWinners(matches: number[][]): number[][] {
	let allWinnersSet = new Set<number>(),
		atLeast1Loss = new Set<number>(),
		moreThan1Loss = new Set<number>()

	matches.forEach(([winner, loser]) => {
		if (!moreThan1Loss.has(winner) && !atLeast1Loss.has(winner)) allWinnersSet.add(winner)

		if (atLeast1Loss.has(loser)) {
			moreThan1Loss.add(loser)
			atLeast1Loss.delete(loser)
			allWinnersSet.delete(loser)
		} else if (!moreThan1Loss.has(loser)) {
			atLeast1Loss.add(loser)
			allWinnersSet.delete(loser)
		}
	})

	return [
		Array.from(allWinnersSet).sort((a, b) => a - b),
		Array.from(atLeast1Loss).sort((a, b) => a - b),
	]
}

// console.log(
// 	findWinners([
// 		[1, 3],
// 		[2, 3],
// 		[3, 6],
// 		[5, 6],
// 		[5, 7],
// 		[4, 5],
// 		[4, 8],
// 		[4, 9],
// 		[10, 4],
// 		[10, 9],
// 	]),
// )

// console.log(
// 	findWinners([
// 		[2, 3],
// 		[1, 3],
// 		[5, 4],
// 		[6, 4],
// 	]),
// )

function maxSubarraySumCircular(nums: number[]): number {
	let currentMax = 0,
		currentMin = 0,
		globalMax = -30000,
		globalMin = 30000,
		total = 0
	for (let num of nums) {
		currentMax += num
		currentMax = Math.max(num, currentMax)
		globalMax = Math.max(currentMax, globalMax)

		currentMin += num
		currentMin = Math.min(num, currentMin)
		globalMin = Math.min(globalMin, currentMin)

		total += num
	}

	globalMax
	total
	globalMin
	return total === globalMin ? Math.max(globalMax, total) : Math.max(globalMax, total - globalMin)
}

console.log(maxSubarraySumCircular([-3, -2, -3]))
// console.log(maxSubarraySumCircular1([3, -1, 2, -1]))
// console.log(maxSubarraySumCircular1([1, -2, 3, -2]))
// console.log(maxSubarraySumCircular1([5, -3, 5]))
