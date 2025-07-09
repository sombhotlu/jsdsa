function plusOne(digits: number[]): number[] {
	let carry = 0
	let lastIndex = digits.length - 1
	let num = digits[lastIndex] + 1
	if (num > 9) {
		carry = 1
		num = num % 10
		digits[lastIndex] = num
	} else {
		digits[lastIndex] = num
		return digits
	}

	for (let i = lastIndex - 1; i >= 0; i--) {
		num = digits[i] + carry
		if (num > 9) {
			num = num % 10
			digits[i] = num
		} else {
			carry = 0
			digits[i] = num
			break
		}
	}

	if (carry) digits.unshift(1)

	return digits
}

console.log(plusOne([1, 2, 3]))
console.log(plusOne([4, 3, 2, 1]))
console.log(plusOne([9]))
