var dailyTemperatures = function (temperatures) {
	let result = []
	for (let i = 0; i < temperatures.length; i++) {
		let j = i,
			k = j + 1
		if (temperatures[k] > temperatures[j]) result.push(1)
		else {
			k++
			while (k < temperatures.length && temperatures[k] <= temperatures[j]) {
				k++
			}

			if (k < temperatures.length) {
				result.push(k - j)
			} else {
				result.push(0)
			}
		}
	}

	return result
}

console.log(dailyTemperatures([34, 80, 80, 34, 34, 80, 80, 80, 80, 34]))
