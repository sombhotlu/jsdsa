function minOperations(logs: string[]): number {
	let result = 0

	for (let log of logs) {
		if (log === './') continue

		if (log === '../') {
			if (result > 0) result--

			continue
		}

		result += 1
	}

	return result
}

console.log(minOperations(['d1/', 'd2/', '../', 'd21/', './']))
console.log(minOperations(['d1/', 'd2/', './', 'd3/', '../', 'd31/']))
console.log(minOperations(['d1/', '../', '../', '../']))
