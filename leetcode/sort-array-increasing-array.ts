function frequencySort(nums: number[]): number[] {
	let map: Record<number, number> = {}

	for (let num of nums) {
		if (map[num]) map[num]++
		else map[num] = 1
	}

	let result: number[] = []

	Object.entries(map)
		.map(([stringNum, num]) => [Number(stringNum), num])
		.sort(([num1, count1], [num2, count2]) => {
			return count1 !== count2 ? count1 - count2 : num2 - num1
		})
		.forEach(([num, count]) => {
			for (let i = 0; i < count; i++) {
				result.push(num)
			}
		})

	return result
}

// console.log(frequencySort([1, 1, 2, 2, 2, 3]))
console.log(frequencySort([2, 3, 1, 3, 2]))
