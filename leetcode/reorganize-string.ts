import {MaxPriorityQueue, IGetCompareValue} from '@datastructures-js/priority-queue'
import {Queue} from '@datastructures-js/queue'

interface ICharCount {
	char: string
	count: number
}

const getCharCount: IGetCompareValue<ICharCount> = (char) => char.count

function reorganizeString(s: string): string {
	if (s === '') return ''

	let map = new Map<string, number>()

	for (const char of s) {
		map.set(char, (map.get(char) || 0) + 1)
	}

	const heap = new MaxPriorityQueue<ICharCount>(getCharCount)

	for (const [char, count] of map) {
		heap.enqueue({
			char,
			count,
		})
	}

	let finalString = ''
	let queue = new Queue<[string, number]>()
	while (heap.size() || queue.size()) {
		if (heap.size() === 0) break

		let charCount = heap.dequeue()!

		finalString += charCount?.char

		if (charCount?.count !== 1) queue.enqueue([charCount.char, charCount.count - 1])
		if (queue.size() > 0 && finalString.at(-1) !== queue.front()[0]) {
			let poppedValue = queue.pop()
			heap.enqueue({
				char: poppedValue[0],
				count: poppedValue[1],
			})
		}
	}

	return finalString.length === s.length ? finalString : ''
}

console.log(reorganizeString('aab'))
console.log(reorganizeString('aaab'))
