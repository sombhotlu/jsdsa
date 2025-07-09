export function twoSum(numbers: number[], target: number): number[] {
	let start = 0,
		end = numbers.length - 1

	while (start < end) {
		let sum = numbers[start] + numbers[end]
		if (sum === target) return [start + 1, end + 1]
		else if (sum < target) start++
		else end--
	}

	return []
}

console.log(twoSum([2, 7, 11, 15], 9))
