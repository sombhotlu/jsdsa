function minOperations(nums: number[]): number {
	let countOfEachNumber = new Map<number, number>()

	for (let num of nums) {
		let count = countOfEachNumber.get(num)
		if (!count) countOfEachNumber.set(num, 1)
		else countOfEachNumber.set(num, count + 1)
	}

	let result = 0
	for (let values of countOfEachNumber.values()) {
		if (values === 1) return -1
		else result += Math.ceil(values / 3)
	}

	return result
}

console.log(minOperations([19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19]))
