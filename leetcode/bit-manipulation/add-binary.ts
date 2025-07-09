function addBinaryDigits(a: string, b = '0', carry = 0, result = ''): [string, number] {
	let temp = Number(`0b${a}`) + Number(`0b${b}`) + carry
	if (temp === 0) {
		carry = 0
		result = `0${result}`
	} else if (temp === 1) {
		carry = 0
		result = `1${result}`
	} else if (temp === 2) {
		carry = 1
		result = `0${result}`
	} else {
		carry = 1
		result = `1${result}`
	}

	return [result, carry]
}

function addBinary_unoptimised(a: string, b: string): string {
	let minLength = 0,
		maxLengthString = '',
		minLengthString = '',
		diffference = 0,
		result = '',
		carry = 0

	if (a.length > b.length) {
		minLength = b.length
		minLengthString = b
		maxLengthString = a
		diffference = a.length - b.length
	} else {
		minLength = a.length
		minLengthString = a
		maxLengthString = b
		diffference = b.length - a.length
	}

	for (let i = minLength - 1; i >= 0; i--) {
		;[result, carry] = addBinaryDigits(
			minLengthString[i],
			maxLengthString[i + diffference],
			carry,
			result,
		)
	}

	for (let i = diffference - 1; i >= 0; i--) {
		;[result, carry] = addBinaryDigits(maxLengthString[i], '0', carry, result)
	}

	if (carry) return `${carry}${result}`
	return result
}

console.log(addBinary('11', '1'))
console.log(addBinary('1010', '1011'))
console.log(addBinary('0', '0'))

console.log(addBinary('100', '110010'))

// ----------------------------------

function addBinary(a: string, b: string): string {
	a = a.split('').reverse().join('')
	b = b.split('').reverse().join('')

	console.log(a)
	console.log(b)

	let maxLength = Math.max(a.length, b.length),
		carry = 0,
		result = ''

	for (let i = 0; i <= maxLength - 1; i++) {
		let addition = +(a[i] ?? 0) + +(b[i] ?? 0) + carry

		carry = addition >> 1 // gives addition / 2
		result = (addition & 1) + result //  addition & 1 is addition % 2
	}

	if (carry) return carry + result
	return result
}
