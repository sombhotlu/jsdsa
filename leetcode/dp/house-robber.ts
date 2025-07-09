function rob(nums: number[]): number {
	let numsLength = nums.length,
		temp

	if (numsLength === 1) return nums[0]

	let sumTillPrevAdjacent = nums[numsLength - 1]
	let sumTillAdjacent = Math.max(nums[numsLength - 2], sumTillPrevAdjacent)

	for (let i = numsLength - 3; i >= 0; i--) {
		temp = Math.max(nums[i] + sumTillPrevAdjacent, sumTillAdjacent)
		sumTillPrevAdjacent = sumTillAdjacent
		sumTillAdjacent = temp
	}

	return Math.max(sumTillAdjacent, sumTillPrevAdjacent)
}

console.log(rob([2, 1, 1, 2]))
console.log(rob([1, 2, 3, 1]))
console.log(rob([2, 7, 9, 3, 1]))
