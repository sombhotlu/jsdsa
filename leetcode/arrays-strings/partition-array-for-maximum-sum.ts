function maxSumAfterPartitioning(arr: number[], k: number): number {
	let result = new Array(arr.length).fill(0)
	result[0] = arr[0]

	for (let i = 1; i < arr.length; i++) {
		let j = i,
			tempK = k
		let currenMax = arr[j]
		while (j >= 0 && tempK > 0) {
			currenMax = Math.max(arr[j], currenMax)
			result[i] = Math.max(result[i], currenMax * (i - j + 1) + (result[j - 1] ?? 0))
			j--
			tempK--
		}
	}

	return result[arr.length - 1]
}

console.log(maxSumAfterPartitioning([1, 15, 7, 9, 2, 5, 10], 3))
console.log(maxSumAfterPartitioning([1, 4, 1, 5, 7, 3, 6, 1, 9, 9, 3], 4))
