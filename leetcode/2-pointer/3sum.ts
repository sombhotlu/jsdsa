function twoSum(numbers: number[], start: number = 0, target: number): number[] {
	let end = numbers.length - 1

	while (start < end) {
		let sum = numbers[start] + numbers[end]
		if (sum === target) return [numbers[start], numbers[end]]
		else if (sum < target) start++
		else end--
	}
	return []
}

function threeSum(nums: number[]): number[][] {
	let result: number[][] = []
	nums.sort((a, b) => a - b)

	for (let i = 0; i < nums.length - 2; i++) {
		let twoSumResult = twoSum(nums, i + 1, -nums[i])
		if (twoSumResult.length) result.push([nums[i], ...twoSumResult])
	}
	return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
