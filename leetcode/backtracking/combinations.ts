function combine(n: number, k: number): number[][] {
	let result: number[][] = []

	function backtrack(start, combination) {
		if (combination.length == k) {
			result.push(combination.slice())
			return
		}

		for (let i = start; i <= n; i++) {
			combination.push(i)
			backtrack(i + 1, combination)
			combination.pop()
		}
	}

	backtrack(1, [])

	return result
}

console.log(combine(4, 2))
