function uniqueOccurrences(arr: number[]): boolean {
	let map = new Map()

	for (let val of arr) {
		if (map.has(val)) {
			map.set(val, map.get(val) + 1)
		} else map.set(val, 1)
	}

	return [...map.keys()].length === new Set(map.values()).size
}
