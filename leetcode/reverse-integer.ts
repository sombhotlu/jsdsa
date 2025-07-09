function reverse(x: number): number {
	let isXPositive = true
	if (x < 0) {
		x = Math.abs(x)
		isXPositive = false
	}

	let result = 0,
		maxVal = 2147483648

	while (x > 0 && result < maxVal) {
		let num = x % 10
		result = result * 10 + num
		x = Math.floor(x / 10)
	}

	if (result >= maxVal) return 0

	return isXPositive ? result : -1 * result
}

console.log(reverse(123))
console.log(reverse(-123))

export {}
