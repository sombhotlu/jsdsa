/* 
    Min Heap

*/

function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
	/* 
        Find products with captial = w in capitals such that which 
        give maximum profit.
    
    */
	let maxFirstProfit = 0
	let index = -1
	let combinedArr = profits.map((profit, i) => {
		if (capital[i] <= w) {
			maxFirstProfit = Math.max(maxFirstProfit, profit)
			index = i
		}
		return [profit, capital[i]]
	})

	let result = maxFirstProfit
	k = k - 1
	combinedArr = combinedArr.splice(index, 1)

	// sort by max profit
	combinedArr.sort((a, b) => b[0] - a[0])

	let minHeap

	while (k > 0) {
		// do this inside in Heap

		for (let i = 0; i < combinedArr.length; i++) {
			if (combinedArr[i][1] <= result) {
				minHeap.insert([...combinedArr[i], i])

				while (minHeap.values.length > k) {
					minHeap.extractMin()
				}
			}
		}

		while (minHeap.values) {
			let value = minHeap.values.pop()
			result += value[0]
			combinedArr = combinedArr.filter((val) => val[0] !== value[0] && val[1] !== value[1])
		}
		k--
	}

	return result
}

console.log(findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1]))
