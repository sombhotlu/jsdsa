function calculate(s: string): number {
	let stack = []

	for (let char of s) {
		if (char === ' ') continue

		if (!isNaN(Number(char))) stack.push(Number(char))
	}
}

console.log(calculate('1 + 1'))
console.log(' 2-1 + 2 ')
console.log('1 + (4 + 5 + 2) - 3 + (6 + 8)')
