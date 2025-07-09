import {
	isPropertyAccessOrQualifiedName,
	unescapeLeadingUnderscores,
} from '../../node_modules/typescript/lib/typescript'

class MinHeap {
	public values: [number, number][]
	constructor() {
		this.values = []
	}

	insert(value: [number, number]) {
		this.values.push(value)
		this.reorder(this.values.length - 1)
		return this
	}

	private reorder(index: number): void {
		if (!index) return

		let parentOfIndex = Math.floor((index - 1) / 2)
		let valueAtIndex = this.values[index]
		let valueAtParent = this.values[parentOfIndex]

		if (valueAtIndex[1] > valueAtParent[1]) return

		this.values[index] = valueAtParent
		this.values[parentOfIndex] = valueAtIndex

		return this.reorder(parentOfIndex)
	}

	extractMin() {
		let rootVal = this.values[0]
		this.values[0] = this.values[this.values.length - 1]
		this.values.length = this.values.length - 1
		if (this.values.length > 1) this.sinkDown()
		return rootVal
	}

	sinkDown() {
		let rootIndex = 0

		let rootVal = this.values[rootIndex],
			firstDecendent = this.values[2 * rootIndex + 1],
			secondDescendent = this.values[2 * rootIndex + 2]

		while (rootVal[1] > firstDecendent?.[1] || rootVal[1] > secondDescendent?.[1]) {
			let indexToBeSwapped
			if (firstDecendent[1] < (secondDescendent?.[1] ?? 10000)) {
				indexToBeSwapped = 2 * rootIndex + 1
			} else {
				indexToBeSwapped = 2 * rootIndex + 2
			}

			this.values[rootIndex] = this.values[indexToBeSwapped]
			this.values[indexToBeSwapped] = rootVal

			rootIndex = indexToBeSwapped
			rootVal = this.values[rootIndex]
			firstDecendent = this.values[2 * rootIndex + 1]
			secondDescendent = this.values[2 * rootIndex + 2]
		}
	}
}

// function topKFrequent(nums: number[], k: number): number[] {
// 	let minHeap = new MinHeap()

// 	let map = new Map()

// 	for (let num of nums) {
// 		map.set(num, (map.get(num) ?? 0) + 1)
// 	}

// 	// console.log(map)

// 	for (let [num, count] of map.entries()) {
// 		if (minHeap.values.length < k) minHeap.insert([num, count])
// 		else if (minHeap.values[0]?.[1] < count && minHeap.values.length === k) {
// 			minHeap.extractMin()
// 			minHeap.insert([num, count])
// 		}
// 		// console.log(minHeap.values)
// 	}

// 	// console.log(minHeap.values)

// 	return minHeap.values.map(([num]) => num)
// }

function topKFrequent(nums: number[], k: number): number[] {
	let map = new Map()

	for (let num of nums) {
		map.set(num, (map.get(num) ?? 0) + 1)
	}

	let buckets = new Array(nums.length)

	for (let [num, count] of map.entries()) {
		if (buckets[count] === undefined) buckets[count] = [num]
		else buckets[count].push(num)
	}

	let result = []
	for (let i = buckets.length; result.length < k && i >= 0; i--) {
		if (buckets[i] !== undefined) {
			result.push(...buckets[i])
		}
	}

	return result
}

// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
// console.log(topKFrequent([3, 0, 1, 0], 1))
// console.log(topKFrequent([-1, 1, 4, -4, 3, 5, 4, -2, 3, -1], 3))
console.log(topKFrequent([5, -3, 9, 1, 7, 7, 9, 10, 2, 2, 10, 10, 3, -1, 3, 7, -9, -1, 3, 3], 3))
