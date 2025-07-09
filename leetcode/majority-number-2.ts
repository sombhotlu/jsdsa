function isMajorityNumber(nums: number[], randomNumber: number): boolean {
	let count = 0
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === randomNumber) count++
		if (count > nums.length / 3) return true
	}

	return false
}

function majorityElement(nums: number[]): number[] {
	let uniqueNumberSet = new Set(nums)
	let result: number[] = []

	uniqueNumberSet.forEach((num) => {
		if (isMajorityNumber(nums, num)) result.push(num)
	})

	return result
}

console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([1, 2]))
