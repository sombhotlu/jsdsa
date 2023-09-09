var decodeString = function (s) {
	let stack = [],
		intermediateString = '',
		numberString = ''

	for (let i = 0; i < s.length; i++) {
		char = s[i]
		if (!isNaN(char)) {
			numberString = ''
			while (char !== '[') {
				numberString += char
				i = i + 1
				char = s[i]
			}
			stack.push(Number(numberString))
		}
		if (char !== ']') {
			stack.push(char)
		} else {
			while (stack.length && isNaN(stack.slice(-1)[0])) {
				let lastElementInStack = stack.slice(-1)[0]
				if (isNaN(lastElementInStack) && lastElementInStack !== '[') {
					intermediateString = `${stack.pop()}${intermediateString}`
				} else if (lastElementInStack === '[') {
					stack.pop()
				}
			}

			if (stack.length && !isNaN(stack.slice(-1)[0])) {
				let number = stack.pop()
				if (!isNaN(number)) {
					intermediateString = intermediateString.repeat(number)

					stack.push(intermediateString)
					intermediateString = ''
				}
			}
		}
	}

	return stack.join('')
}

console.log(decodeString('3[a]2[bc]'))
console.log(decodeString('3[a2[c]]'))
console.log(decodeString('2[abc]3[cd]ef'))
console.log(decodeString('abc3[cd]xyz'))
console.log(decodeString('100[leetcode]'))
console.log(decodeString('3[z]2[2[y]pq4[2[jk]e1[f]]]ef'))
