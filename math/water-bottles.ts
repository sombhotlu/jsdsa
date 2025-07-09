function numWaterBottles(numBottles: number, numExchange: number): number {
	let result = 0,
		quotient,
		remainder = numBottles % numExchange
	while (remainder !== numBottles) {
		quotient = Math.floor(numBottles / numExchange)
		result += quotient * numExchange
		numBottles = remainder + quotient

		remainder = numBottles % numExchange
	}

	result += numBottles

	return result
}

console.log(numWaterBottles(9, 3))
