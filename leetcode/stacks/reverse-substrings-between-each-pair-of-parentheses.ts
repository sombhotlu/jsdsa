function reverseParentheses(s: string): string {
	let stack: string[] = []

	for (let char of s) {
		if (char !== ')') {
			stack.push(char)
			continue
		}

		let tempStr = ''
		while (stack.at(-1) !== '(') {
			tempStr += stack.pop()
		}
		stack.pop()
		stack.push(...tempStr)
	}

	return stack.join('')
}

console.log(reverseParentheses('(ed(et(oc))el)'))
console.log(reverseParentheses('"(u(love)i)"'))
