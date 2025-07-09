function sequentialDigits(low: number, high: number): number[] {
	let result: number[] = []
	let nums = '123456789'
	let lowLength = low.toString().length
	let highLength = high.toString().length

	for (let i = 0; i <= 9 - lowLength; i++) {
		for (let j = lowLength + i; j <= 9; j++) {
			let num = Number(nums.substring(i, j))
			if (num.toString().length > highLength) break
			if (num >= low && num <= high) {
				result.push(num)
			}
		}
	}

	return result.sort((a, b) => a - b)
}

console.log(sequentialDigits(100, 300))
console.log(sequentialDigits(1000, 13000))
console.log(sequentialDigits(58, 155))
