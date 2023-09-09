/*

Symbol       Value
I             1
IV            4
V             5
IV            9
X             10
XL            40
L             50
XC            90
C             100
CD            400
D             500
CM            900
M             1000

*/

let romanToIntegerMapping = {
	I: 1,
	IV: 4,
	V: 5,
	IX: 9,
	X: 10,
	XL: 40,
	L: 50,
	XC: 90,
	C: 100,
	CD: 400,
	D: 500,
	CM: 900,
	M: 1000,
}

let numbers = Object.values(romanToIntegerMapping)
let romans = Object.keys(romanToIntegerMapping)

// function intToRoman(num: number): string {
// 	let result = '',
// 		digit

// 	for (let i = 0; num !== 0; i++) {
// 		digit = (num % 10) * Math.pow(10, i)
// 		num = num / 10

// 		result = integerToRomanMapping[digit]
// 	}
// }

function intToRoman(num: number) {
	let result = []
	let remaining = num

	while (remaining) {
		let i = 0
		while (numbers[i] <= remaining) {
			i++
		}
		result.push(romans[i - 1])
		remaining -= numbers[i - 1]
	}
	return result.join('')
}

// console.log(intToRoman(3)) //[L]
// console.log(intToRoman(58)) //[L]
// console.log(intToRoman(1994)) //[L]

function romanToInt(s: string): number {
	let i = 0,
		stringLength = s.length,
		result = 0
	while (i < stringLength) {
		let twoChars = s.substring(i, i + 2)
		if (romanToIntegerMapping[twoChars]) {
			result += romanToIntegerMapping[twoChars]
			i += 2
		} else {
			result += romanToIntegerMapping[s[i]]
			i += 1
		}
	}

	return result
}

console.log(romanToInt('III')) //3
console.log(romanToInt('LVIII')) //58
console.log(romanToInt('MCMXCIV')) //1994
