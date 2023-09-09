class MaxHeap {
	public values: number[]
	constructor() {
		this.values = []
	}

	insert(value: number) {
		this.values.push(value)
		this.reorder(this.values.length - 1)
		return this
	}

	private reorder(index: number): void {
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
		this.values.length = this.values.length - 1
		this.sinkDown()
	}

	sinkDown() {
		let rootIndex = 0
		let rootVal = this.values[rootIndex],
			firstDecendent = this.values[2 * rootIndex + 1],
			secondDescendent = this.values[2 * rootIndex + 2]

		while (rootVal < firstDecendent || rootVal < secondDescendent) {
			let indexToBeSwapped =
				firstDecendent < secondDescendent ? 2 * rootIndex + 2 : 2 * rootIndex + 1
			this.values[rootIndex] = this.values[indexToBeSwapped]
			this.values[indexToBeSwapped] = rootVal

			rootIndex = indexToBeSwapped
			firstDecendent = this.values[2 * rootIndex + 1]
			secondDescendent = this.values[2 * rootIndex + 2]
		}
	}
}

// let myHeap = new MaxHeap()
// myHeap.insert(41)
// myHeap.insert(39)
// myHeap.insert(33)
// myHeap.insert(18)
// myHeap.insert(27)
// myHeap.insert(12)
// myHeap.insert(55)
// // myHeap.extractMax()

// console.log(myHeap.values)

class MinHeap {
	public values: number[]
	constructor() {
		this.values = []
	}

	insert(value: number) {
		this.values.push(value)
		this.reorder(this.values.length - 1)
		return this
	}

	private reorder(index: number): void {
		if (!index) return

		let parentOfIndex = Math.floor((index - 1) / 2)
		let valueAtIndex = this.values[index]
		let valueAtParent = this.values[parentOfIndex]

		if (valueAtIndex > valueAtParent) return

		this.values[index] = valueAtParent
		this.values[parentOfIndex] = valueAtIndex

		return this.reorder(parentOfIndex)
	}

	extractMin() {
		this.values[0] = this.values[this.values.length - 1]
		this.sinkDown()
	}

	sinkDown() {
		let rootIndex = 0
		let rootVal = this.values[this.values.length - 1]
		this.values[rootIndex] = rootVal
		this.values.length = this.values.length - 1

		while (
			rootVal > this.values[2 * rootIndex + 1] ||
			rootVal > this.values[2 * rootIndex + 2]
		) {
			let indexToBeSwapped
			if (this.values[2 * rootIndex + 1] < this.values[2 * rootIndex + 2]) {
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

// let myMinHeap = new MaxHeap()
// myMinHeap.insert(3)
// myMinHeap.insert(2)
// myMinHeap.insert(3)
// myMinHeap.insert(1)
// myMinHeap.insert(2)
// myMinHeap.insert(4)
// myMinHeap.insert(5)
// myMinHeap.insert(5)
// myMinHeap.insert(6)
// // myMinHeap.insert(55)
// console.log(myMinHeap)

function findKthLargest(nums: number[], k: number): number {
	let myHeap = new MaxHeap()
	for (let num of nums) {
		myHeap.insert(num)
	}

	let i = k - 1
	while (i) {
		myHeap.extractMax()
		i--
	}
	return myHeap.values[0]
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)) // 5
console.log(findKthLargest([5, 2, 4, 1, 3, 6, 0], 4)) // 3
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)) //4
console.log(
	findKthLargest(
		[3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6],
		20,
	),
)
