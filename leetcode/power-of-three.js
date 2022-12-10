/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
	let number = n * Math.sign(n)
	if (number < 3) return false

	while (number !== 1) {
		if (number % 3 === 0) number /= 3
		else break
	}

	return number == 1
}

console.log(isPowerOfThree(27))
