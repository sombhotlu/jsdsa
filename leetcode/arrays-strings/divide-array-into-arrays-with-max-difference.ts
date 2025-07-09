function divideArray(nums: number[], k: number): number[][] {
	nums.sort((a, b) => a - b)
	let result: number[][] = []

	for (let j = 0; j < nums.length; j += 3) {
		if (
			nums[j + 1] - nums[j] <= k &&
			nums[j + 2] - nums[j] <= k &&
			nums[j + 2] - nums[j + 1] <= k
		)
			result.push([nums[j], nums[j + 1], nums[j + 2]])
		else return []
	}

	return result
}

console.log(divideArray([1, 3, 4, 8, 7, 9, 3, 5, 1], 2))
console.log(divideArray([1, 3, 3, 2, 7, 3], 3))
