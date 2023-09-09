function subarraySum(nums: number[], k: number): number {
	let sum = 0,
		result = 0,
		prefixSumMap = new Map([[0, 1]])

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i]

		let prefixSum = prefixSumMap.get(sum)
		prefixSumMap.set(sum, prefixSum ? prefixSum + 1 : 1)

		result += prefixSumMap.get(sum - k) ?? 0
	}

	return result
}

console.log(subarraySum([1, 1, 1], 2))
console.log(subarraySum([1, 2, 3], 3))
console.log(subarraySum([1, -1, 1, 1, 1, 1], 3))
