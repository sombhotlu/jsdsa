function climbStairs(n: number): number {
	let steps = new Array(n + 1).fill(0)
	steps[0] = 0
	steps[1] = 1
	steps[2] = 2
	steps[3] = 3

	function climbStair(n: number) {
		if (steps[n]) return steps[n]
		steps[n] = climbStair(n - 1) + 2 + climbStair(n - 2)
		return steps[n]
	}

	return climbStair(n)
}

console.log(climbStairs(4))
