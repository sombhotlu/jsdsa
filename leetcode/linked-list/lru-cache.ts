class LRUCache {
	private size: number
	private map = new Map()
	private set = new Set()
	constructor(capacity: number) {
		this.size = capacity
	}

	get(key: number): number {
		let requireNum = this.map.get(key)
		if (requireNum === undefined) return -1

		if (!this.set.has(key))
			if (this.set.size === this.size) {
				this.set.delete(this.set.values().next().value)
			}
		this.set.delete(key)
		this.set.add(key)

		return requireNum
	}

	put(key: number, value: number): void {
		if (!this.set.has(key))
			if (this.map.size === this.size) {
				let num = this.set.values().next().value
				this.set.delete(num)
				this.map.delete(num)
			} else {
				for (let mapKey of this.map.keys()) {
					if (!this.set.has(mapKey)) {
						this.map.delete(mapKey)
						break
					}
				}
			}

		this.map.set(key, value)
		this.set.delete(key)
		this.set.add(key)
	}
}

// const cache = new LRUCache(2)
// cache.put(1, 0)
// cache.put(2, 2)
// cache.get(1)
// cache.put(3, 3)
// cache.get(2)
// cache.put(4, 4)
// console.log(cache.get(1))

const cache = new LRUCache(2)
cache.get(2)
cache.put(2, 6)
cache.get(1)
cache.put(1, 5)
cache.put(1, 2)
cache.get(1)
console.log(cache.get(2))

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
