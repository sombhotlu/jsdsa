function memoize(fn) {
	let map = new Map()
	return function (...args) {
		let stringifyArgs = false
		for (let arg of args) {
			if (typeof arg !== 'object' && arg !== null) stringifyArgs = true
		}

		let searchKey = stringifyArgs ? JSON.stringify(args) : args
		console.log(searchKey)

		if (map.has(searchKey)) {
			return 'memoised'
		}

		let result = fn(...args)
		map.set(searchKey, result)

		return 'not-memoised'
	}
}

const o = {},
	a = {},
	c = {}

let fn = function (a, b, c) {
	return {...a, ...b, ...c}
}

let memoisedFn = memoize(fn)
console.log(memoisedFn(o, c, a))
console.log(memoisedFn(o, c, a))
