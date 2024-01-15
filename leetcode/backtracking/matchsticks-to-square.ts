function makesquare(matchsticks: number[]): boolean {
	let totalSum = 0
	for (let i = 0; i < matchsticks.length; i++) totalSum += matchsticks[i]

	if (totalSum % 2) return false

	let lengthOfEachSide = totalSum / 4

	let totalLength = matchsticks.length
	let sides = new Array(4).fill(0)

	matchsticks.sort((a, b) => b - a)

	function backtrack(i: number) {
		if (i === totalLength) return true

		for (let j of [0, 1, 2, 3]) {
			if (sides[j] + matchsticks[i] <= lengthOfEachSide) {
				sides[j] += matchsticks[i]
				if (backtrack(i + 1)) return true
				sides[j] -= matchsticks[i]
			}
		}
		return false
	}

	return backtrack(0)
}

// console.log(makesquare([1, 1, 2, 2, 2]))
// console.log(makesquare([3, 3, 3, 3, 4]))
console.log(makesquare([14, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 8, 9, 19]))
