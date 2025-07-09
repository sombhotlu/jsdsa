// not working yet

// function gcdOfStrings(str1: string, str2: string): string {
// 	if (str2.length > str1.length) {
// 		let temp = str1
// 		str1 = str2
// 		str2 = temp
// 	}

// 	let str2Length = str2.length

// 	let i = 0
// 	while (str1.indexOf(str2, str2Length * i) === i * str2Length) {
// 		i++
// 	}

// 	if (str2Length * i === str1.length) return str2

// 	i = 1
// 	let subsetStr = str2[0]
// 	while (i < str2Length) {
// 		if (!(str2.indexOf(subsetStr, i) === i)) {
// 			subsetStr += str2[i]
// 			i++
// 		} else {
// 			if (subsetStr.length === 1) subsetStr += str2[i]
// 			i += subsetStr.length
// 		}
// 	}

// 	subsetStr

// 	if (str2.indexOf(subsetStr) !== 0) return ''

// 	i = 0
// 	while (str1.indexOf(subsetStr, subsetStr.length * i) === i * subsetStr.length) {
// 		i++
// 	}

// 	if (subsetStr.length * i !== str1.length) return ''

// 	return subsetStr
// }

function gcdOfStrings(str1: string, str2: string): string {
	if (str2.length > str1.length) {
		let temp = str1
		str1 = str2
		str2 = temp
	}

	for (let i = str2.length; i >= 0; i--) {
		let str2SubString = str2.substring(0, i)
		if (str2.split(str2SubString).filter(Boolean).length === 0) {
			if (str1.split(str2SubString).filter(Boolean).length === 0) return str2SubString
		}
	}

	return ''
}

console.log(gcdOfStrings('ABCABC', 'ABC'))
console.log(gcdOfStrings('ABC', 'ABCABC'))
console.log(gcdOfStrings('ABABAB', 'ABAB'))
console.log(gcdOfStrings('ABABABAB', 'ABAB'))
console.log(gcdOfStrings('LEET', 'CODE'))
console.log(gcdOfStrings('AAAAAAAAA', 'AAACCC'))
console.log(gcdOfStrings('EFGABC', 'ABC'))
console.log(
	gcdOfStrings(
		'FFBNXKSTFFBNXKSTFFBNXKSTFFBNXKSTFFBNXKST',
		'FFBNXKSTFFBNXKSTFFBNXKSTFFBNXKSTFFBNXKSTFFBNXKSTFFBNXKSTFFBNXKSTFFBNXKST',
	),
)
