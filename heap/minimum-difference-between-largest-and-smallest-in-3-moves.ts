import {MaxHeap, MinHeap} from '../Heaps'

function minDifference(nums: number[]): number {
	if (nums.length < 4) return 0

	let minHeap = new MinHeap()
	let maxHeap = new MaxHeap()

	for (let i = 0; i < 4; i++) {
		minHeap.insert(nums[i])
		maxHeap.insert(nums[i])
	}

	for (let i = 4; i < nums.length; i++) {
		maxHeap.insert(nums[i])
		minHeap.insert(nums[i])
		maxHeap.extractMax()
		minHeap.extractMin()
	}

	let smallestElements = []
	let largestElements = []
	for (let i = 0; i < 4; i++) {
		largestElements.push(minHeap.extractMin())
		smallestElements.push(maxHeap.extractMax())
	}

	let difference = []
	for (let i = 0; i < 4; i++) {
		difference.push(largestElements[4 - i - 1] - smallestElements[i])
	}

	return Math.min(...difference)
}

// console.log(minDifference([5, 3, 2, 4]))
console.log(minDifference([1, 5, 0, 10, 14]))
// console.log(minDifference([3, 100, 20]))

// if (nums[i] === smallest && !removedSmallest) {
// 	removedSmallest = true
// 	continue
// }
// if (nums[i] === largest && !removedLargest) {
// 	removedLargest = true
// 	continue
// }
