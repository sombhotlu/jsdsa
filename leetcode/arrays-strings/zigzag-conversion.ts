/*
   for first row and last row its always (2n -2)
   for every other row it is 2n -2 - 2i

*/

function convert(s: string, numRows: number): string {
	let result = '',
		mainLogic = 2 * numRows - 2

	if (mainLogic === 0) return s

	result = logicForEndRows(s, 0, result, mainLogic)

	for (let i = 1; i <= numRows - 2; i++) {
		let alternate = true,
			j = i
		while (j < s.length) {
			result += s[j]
			if (alternate) j += mainLogic - 2 * i
			else j += 2 * i
			alternate = !alternate
		}
	}

	result = logicForEndRows(s, numRows - 1, result, mainLogic)

	return result
}

function logicForEndRows(s: string, i: number, result: string, mainLogic: number) {
	while (i < s.length) {
		result += s[i]
		i += mainLogic
	}

	return result
}

// console.log(convert('PAYPALISHIRING', 3)) // PAHNAPLSIIGYIR
// console.log(convert('PAYPALISHIRING', 4)) // PINALSIGYAHRPI
console.log(convert('A', 1)) // A
