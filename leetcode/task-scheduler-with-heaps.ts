import {MaxPriorityQueue} from '@datastructures-js/priority-queue'
import {Queue} from '@datastructures-js/queue'

function leastInterval(tasks: string[], n: number): number {
	if (n === 0) return tasks.length
	let map = new Map<string, number>()

	for (const task of tasks) {
		map.set(task, (map.get(task) || 0) + 1)
	}

	const heap = new MaxPriorityQueue<number>()

	for (const count of map.values()) {
		heap.enqueue(count)
	}
	let queue = new Queue<[number, number]>()
	let time = 0
	while (heap.size() || queue.size()) {
		time++

		let count = heap.dequeue()
		if (count && count - 1 > 0) queue.enqueue([count - 1, time + n])

		if (queue.size() && queue.front()?.[1] == time)
			heap.enqueue((queue.pop() as [number, number])[0])
	}
	return time
}

console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2))
console.log(leastInterval(['A', 'C', 'A', 'B', 'D', 'B'], 1))
console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 3))
console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C', 'D', 'D', 'E'], 2))
