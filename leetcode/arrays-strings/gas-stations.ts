function canCompleteCircuit(gas: number[], cost: number[]): number {
	let sumOfGasUnits = gas.reduce((acc, curr) => acc + curr, 0)
	let sumOfDistances = cost.reduce((acc, curr) => acc + curr, 0)

	if (sumOfDistances > sumOfGasUnits) return -1

	let diffOfDistanceAndGasUnits = cost.map((distance, i) => {
		return gas[i] - distance
	})

	let currSum = 0,
		maxSum = 0,
		indexOfMaxSum = -1,
		position = 0

	for (let i = 0; i < diffOfDistanceAndGasUnits.length; i++) {
		currSum += diffOfDistanceAndGasUnits[i]

		if (currSum > maxSum) {
			maxSum = currSum
			indexOfMaxSum = position
		}

		if (currSum < 0) {
			currSum = 0
			position = i + 1
			maxSum = 0
		}
	}

	return indexOfMaxSum === -1 ? 0 : indexOfMaxSum
}

// console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])) //3
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3])) //-1
// console.log(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1])) //4
// console.log(canCompleteCircuit([3, 1, 1], [1, 2, 2])) //0
// console.log(canCompleteCircuit([5, 8, 2, 8], [6, 5, 6, 6])) //3
// console.log(canCompleteCircuit([6, 1, 4, 3, 5], [3, 8, 2, 4, 2])) //2
// console.log(canCompleteCircuit([2, 0, 1, 2, 3, 4, 0], [0, 1, 0, 0, 0, 0, 11])) //0
