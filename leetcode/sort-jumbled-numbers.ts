function sortJumbled(mapping: number[], nums: number[]): number[] {
	const map: [number, number][] = []
	for (let num of nums) {
		let initialNum = num
		let stringNum = ''

		if (num === 0) {
			map.push([mapping[num], num])
			continue
		}

		while (num > 0) {
			stringNum = mapping[num % 10] + stringNum
			num = Math.floor(num / 10)
		}
		map.push([Number(stringNum), initialNum])
	}

	return map.sort(([a], [b]) => a - b).map((tuple) => tuple[1])
}

// console.log(sortJumbled([8, 9, 4, 0, 2, 1, 3, 5, 7, 6], [991, 338, 38]))
console.log(sortJumbled([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))
