/* 
    create a time limited cache
    we can do that with object 

    on Setting
    so we call a function which first checks whether the key is there in the object.
    if yes returns clears the timeout and sets the new value and the timeout and returns true if value exist else false

    new Map(key { value: val, timeoutFn: })

    timeout gets over the key is removed from the cache.

---------------------------------------------------------------------------


 */

var TimeLimitedCache = function () {
	this.map = new Map()
}

/**
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
	let valueExists = false,
		valueObject = {}

	if (this.map.has(key)) {
		valueObject = this.map.get(key)

		console.log(valueObject)

		clearTimeout(valueObject.timeoutFn)
		valueExists = true
	}

	let clearTimeoutFn = setTimeout(() => {
		if (this.map.has(key)) this.map.delete(key)
	}, duration)

	this.map.set(key, {value, timeoutFn: clearTimeoutFn})

	return valueExists
}

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
	if (this.map.has(key)) {
		return this.map.get(key).value
	} else return -1
}

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
	return this.map.size
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */

var obj = new TimeLimitedCache()
console.log(obj.set(1, 42, 5000))
console.log(obj.set(3, 12, 5000))
console.log(obj.set(1, 13, 5000))
console.log(obj.map.get(1))
console.log(obj.count())
;(async (obj) => {
	console.log(obj.count())
	await new Promise((res) => setTimeout(res, 5000))
	console.log(obj.map.get(1))
})(obj)
