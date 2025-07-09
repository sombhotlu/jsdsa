function getXorResult(arr: number[]): number {
	if (arr.length === 0) throw new Error('No Array length')

	let xorResult = arr[0]

	for (let i = 1; i < arr.length; i++) {
		xorResult ^= arr[i]
	}

	return xorResult
}

function singleNumber(nums: number[]): number[] {
	if (nums.length === 2) return nums

	let numsXorResult = getXorResult(nums)

	let diffBit = 1
	while (!(numsXorResult & diffBit)) {
		diffBit = diffBit << 1
	}

	let bucket1 = 0,
		bucket2 = 0

	for (let i = 0; i < nums.length; i++) {
		if ((nums[i] & diffBit) === 0) bucket1 ^= nums[i]
		else bucket2 ^= nums[i]
	}

	return [bucket1, bucket2]
}

console.log(singleNumber([1, 2, 1, -10, 2, -100])) // [3,5]
console.log(singleNumber([0, 1])) // [0,1]
console.log(singleNumber([-1, 0])) // [3,5]
