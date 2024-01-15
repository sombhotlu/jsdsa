function combinationSum(candidates: number[], target: number): number[][] {
	let result: number[][] = []

	function combinations(combination: number[], interimSum: number, startIndex: number) {
		if (interimSum === target) {
			result.push(combination.slice())
			return
		}

		if (startIndex >= candidates.length || interimSum > target) return

		combination.push(candidates[startIndex])
		combinations(combination, interimSum + candidates[startIndex], startIndex)
		combination.pop()
		combinations(combination, interimSum, startIndex + 1)
	}

	combinations([], 0, 0)

	return result
}

console.log(combinationSum([2, 3, 5], 8))
