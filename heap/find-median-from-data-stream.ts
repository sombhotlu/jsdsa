import {MaxHeap, MinHeap} from '../Heaps'

// class MinHeap {
// 	public values: number[]
// 	constructor() {
// 		this.values = []
// 	}

// 	insert(value: number) {
// 		this.values.push(value)
// 		this.reorder(this.values.length - 1)
// 		return this
// 	}

// 	private reorder(index: number): void {
// 		if (!index) return

// 		let parentOfIndex = Math.floor((index - 1) / 2)
// 		let valueAtIndex = this.values[index]
// 		let valueAtParent = this.values[parentOfIndex]

// 		if (valueAtIndex > valueAtParent) return

// 		this.values[index] = valueAtParent
// 		this.values[parentOfIndex] = valueAtIndex

// 		return this.reorder(parentOfIndex)
// 	}

// 	extractMin() {
// 		let rootVal = this.values[0]
// 		this.values[0] = this.values[this.values.length - 1]
// 		this.values.length = this.values.length - 1
// 		this.sinkDown()
// 		return rootVal
// 	}

// 	sinkDown() {
// 		let rootIndex = 0

// 		let rootVal = this.values[rootIndex],
// 			firstDecendent = this.values[2 * rootIndex + 1],
// 			secondDescendent = this.values[2 * rootIndex + 2]

// 		while (rootVal > firstDecendent || rootVal > secondDescendent) {
// 			let indexToBeSwapped
// 			if (!secondDescendent || firstDecendent < secondDescendent) {
// 				indexToBeSwapped = 2 * rootIndex + 1
// 			} else {
// 				indexToBeSwapped = 2 * rootIndex + 2
// 			}

// 			this.values[rootIndex] = this.values[indexToBeSwapped]
// 			this.values[indexToBeSwapped] = rootVal

// 			rootIndex = indexToBeSwapped
// 			rootVal = this.values[rootIndex]
// 			firstDecendent = this.values[2 * rootIndex + 1]
// 			secondDescendent = this.values[2 * rootIndex + 2]
// 		}
// 	}
// }

class MedianFinder {
	public minHeap: MinHeap
	public maxHeap: MaxHeap

	constructor() {
		this.minHeap = new MinHeap()
		this.maxHeap = new MaxHeap()
	}

	addNum(num: number): void {
		if (num <= this.maxHeap.values[0]) this.maxHeap.insert(num)
		else this.minHeap.insert(num)

		this.distribute()
	}

	findMedian(): number {
		if (this.maxHeap.values.length === this.minHeap.values.length) {
			return (this.maxHeap.values[0] + this.minHeap.values[0]) / 2
		} else if (this.maxHeap.values.length > this.minHeap.values.length) {
			return this.maxHeap.values[0]
		} else return this.minHeap.values[0]
	}

	private distribute(): void {
		if (this.maxHeap.values.length > this.minHeap.values.length + 1) {
			let val = this.maxHeap.extractMax()
			this.minHeap.insert(val)
		} else if (this.maxHeap.values.length + 1 < this.minHeap.values.length) {
			let val = this.minHeap.extractMin()
			this.maxHeap.insert(val)
		}
	}
}

var obj = new MedianFinder()

obj.addNum(1)
obj.addNum(2)
obj.addNum(3)
obj.addNum(4)
obj.addNum(4)
obj.addNum(5)
obj.addNum(6)
obj.addNum(7)
obj.addNum(8)
obj.addNum(9)
obj.addNum(10)
console.log(obj.findMedian())
console.log(obj)
// obj.addNum(2)
// console.log(obj.findMedian())
