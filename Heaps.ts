class MaxHeap {
	public values: number[]
	constructor() {
		this.values = []
	}

	insert(value) {
		this.values.push(value)
		this.reorder(this.values.length - 1)
		return this
	}

	private reorder(index) {
		if (!index) return

		let parentOfIndex = Math.floor((index - 1) / 2)
		let valueAtIndex = this.values[index]
		let valueAtParent = this.values[parentOfIndex]

		if (valueAtIndex < valueAtParent) return

		this.values[index] = valueAtParent
		this.values[parentOfIndex] = valueAtIndex

		return this.reorder(parentOfIndex)
	}

	extractMax() {
		this.values[0] = this.values[this.values.length - 1]
		this.sinkDown()
	}

	sinkDown() {
		let rootIndex = 0
		let rootVal = this.values[this.values.length - 1]
		this.values[rootIndex] = rootVal
		this.values.length = this.values.length - 1

		while (
			rootVal < this.values[2 * rootIndex + 1] ||
			rootVal < this.values[2 * rootIndex + 2]
		) {
			let indexToBeSwapped
			if (this.values[2 * rootIndex + 1] > this.values[2 * rootIndex + 2]) {
				indexToBeSwapped = 2 * rootIndex + 1
			} else {
				indexToBeSwapped = 2 * rootIndex + 2
			}

			this.values[rootIndex] = this.values[indexToBeSwapped]
			this.values[indexToBeSwapped] = rootVal

			rootIndex = indexToBeSwapped
		}
	}
}

let myHeap = new MaxHeap()
myHeap.insert(41)
myHeap.insert(39)
myHeap.insert(33)
myHeap.insert(18)
myHeap.insert(27)
myHeap.insert(12)
myHeap.insert(55)
// myHeap.extractMax()

console.log(myHeap.values)
