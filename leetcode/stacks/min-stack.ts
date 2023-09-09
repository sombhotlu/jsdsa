class MinStack {
	private stack: number[] = []
	private min_stack: number[] = []
	private min = Number.MAX_SAFE_INTEGER
	constructor() {}

	push(val: number): void {
		if (val < this.min_stack[this.min_stack.length - 1]) this.min_stack.push(val)

		this.stack.push(val)
	}

	pop(): void {
		let removedVal = this.stack.pop()
		if (removedVal === this.min_stack[this.min_stack.length - 1]) this.min_stack.pop()
	}

	top(): number {
		return this.stack[this.stack.length - 1]
	}

	getMin(): number {
		return this.min_stack[this.min_stack.length - 1]
	}
}
