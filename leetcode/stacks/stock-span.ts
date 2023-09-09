class StockSpanner {
	private result: number[]
	private stack: number[]
	constructor() {
		this.stack = []
		this.result = []
	}

	next(price: number): number {
		let val = 1
		while (
			this.stack.length &&
			this.result.length &&
			price >= this.stack[this.stack.length - 1]
		) {
			this.stack.pop()
			let num = this.result.pop()
			if (num) val += num
		}
		this.result.push(val)
		this.stack.push(price)
		return val
	}
}

const stockSpanner = new StockSpanner()
// console.log(stockSpanner.next(100))
// console.log(stockSpanner.next(80))
// console.log(stockSpanner.next(60))
// console.log(stockSpanner.next(70))
// console.log(stockSpanner.next(60))
// console.log(stockSpanner.next(75))
// console.log(stockSpanner.next(85))

console.log(stockSpanner.next(5))
console.log(stockSpanner.next(56))
console.log(stockSpanner.next(66))
console.log(stockSpanner.next(91))
console.log(stockSpanner.next(71))
console.log(stockSpanner.next(72))
console.log(stockSpanner.next(75))
console.log(stockSpanner.next(69))
console.log(stockSpanner.next(95))
console.log(stockSpanner.next(94))
