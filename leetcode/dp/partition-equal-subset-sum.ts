function canPartition(nums: number[]): boolean {
	let totalSum = nums.reduce((acc, val) => acc + val, 0)
	if (totalSum % 2) return false
	let target = totalSum / 2
	let intermediateSum = new Set<number>([0])

	for (let num of nums) {
		if (num === target) return true
		let previousSet = Array.from(intermediateSum)
		for (let val of previousSet) {
			if (val + num === target) return true
			intermediateSum.add(val + num)
		}
	}

	return false
}

// console.log(canPartition([1, 5, 11, 5]))
// console.log(canPartition([1, 2, 3, 5]))
console.log(canPartition([1, 2, 5]))
