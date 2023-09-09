function maxTurbulenceSize(arr: number[]): number {
	let maxLengthOfTurbulence = 1,
		i = 0,
		j = 1,
		previousTurbulence = 0

	while (j < arr.length) {
		if (
			(arr[j - 1] < arr[j] && previousTurbulence !== -1) ||
			(arr[j - 1] > arr[j] && previousTurbulence !== 1)
		) {
			previousTurbulence = arr[j - 1] < arr[j] ? -1 : 1
		} else {
			maxLengthOfTurbulence = Math.max(maxLengthOfTurbulence, j - i)

			if (arr[j - 1] === arr[j]) {
				i = j
				previousTurbulence = 0
			} else {
				i = j - 1
				previousTurbulence = arr[j - 1] < arr[j] ? -1 : 1
			}
		}
		j++
	}

	maxLengthOfTurbulence = Math.max(maxLengthOfTurbulence, j - i)

	return maxLengthOfTurbulence
}

console.log(maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9])) // 5
console.log(maxTurbulenceSize([4, 8, 12, 16])) // 2
console.log(maxTurbulenceSize([100])) // `
