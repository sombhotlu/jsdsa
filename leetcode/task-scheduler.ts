function incrementResult(queue: CustomQueue<string>, task: string, result: number) {
	let char = queue.enqueue(task)
	return char ? result + 1 : result
}

function sortMap(map: Map<string, number>) {
	return new Map([...map.entries()].sort((a, b) => b[1] - a[1]))
}

function leastInterval(tasks: string[], n: number): number {
	if (n === 0) return tasks.length

	let map = new Map<string, number>()

	for (const task of tasks) {
		map.set(task, (map.get(task) || 0) + 1)
	}
	let sortedMap = sortMap(map)

	let queue = new CustomQueue<string>(n)

	let result = 0

	/* 
        Keep looping over the sorted Map until its empty and 
        for every character check if it present in the queue, 
        if yes add 'idle' to the queue 
        else enqueue the character and decrement the count of character in the map.
        If the count of character is 0 in map remove the character from the map. And after every enqueue check the return value, if it is present then increment the result. 
    */
	while (sortedMap.size > 0) {
		let idle = true
		for (const [task, count] of sortedMap) {
			if (!queue.includes(task)) {
				idle = false
				if (count - 1 === 0) {
					sortedMap.delete(task)
				} else {
					sortedMap.set(task, count - 1)
				}

				result = incrementResult(queue, task, result)
				break
			}
		}

		sortedMap = sortMap(sortedMap)

		if (idle) {
			result = incrementResult(queue, 'idle', result)
		}
	}
	return result + queue.size()
}

class CustomQueue<T> {
	public items: T[] = []
	private maxLength: number

	constructor(maxLength: number) {
		this.maxLength = maxLength
	}

	enqueue(item: T): T | void {
		this.items.push(item)
		if (this.items.length > this.maxLength) {
			return this.dequeue() // Remove the oldest item if the queue is full
		}
	}

	dequeue(): T | undefined {
		return this.items.shift()
	}

	peek(): T | undefined {
		return this.items[0]
	}

	isEmpty(): boolean {
		return this.items.length === 0
	}

	size(): number {
		return this.items.length
	}

	includes(item: T): boolean {
		return this.items.includes(item)
	}

	getItems(): T[] {
		return this.items
	}
}

// console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2))
// console.log(leastInterval(['A', 'C', 'A', 'B', 'D', 'B'], 1))
// console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 3))
console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C', 'D', 'D', 'E'], 2))
