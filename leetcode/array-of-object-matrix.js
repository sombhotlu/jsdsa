/**
 * @param {Array} arr
 * @return {Matrix}
 */
var jsonToMatrix = function (arr) {
	let result = []
	let allKeys = []

	for (let obj of arr) {
		allKeys = allKeys.concat(findAllKeys(obj))
	}
	allKeys = Array.from(new Set(allKeys)).sort()
	result.push(allKeys)

	for (let obj of arr) {
		let tempArr = []
		for (let key of allKeys) {
			let keys = key.split('.')
			let value = obj
			let i = 0
			while (i < keys.length) {
				if (!isObject(value)) break
				value = value[keys[i++]]
			}

			if (i < keys.length || isObject(value) || value === undefined) tempArr.push('')
			else {
				tempArr.push(value)
			}
		}
		result.push(tempArr)
	}

	return result
}

function isObject(x) {
	return x !== null && typeof x === 'object'
}

function findAllKeys(obj, parentKey = undefined, result = []) {
	for (let key in obj) {
		if (obj[key] !== null && typeof obj[key] === 'object') {
			findAllKeys(obj[key], parentKey ? `${parentKey}.${key}` : key, result)
		} else {
			result.push(parentKey ? `${parentKey}.${key}` : key)
		}
	}

	return result
}

// console.log(findAllKeys({a: {c: 2, b: {d: '11', e: '12'}}}).sort())
// console.log(findAllKeys({a: 1, b: 2}).sort())
// console.log(findAllKeys([{a: null}]))

// console.log(jsonToMatrix([{a: 1, b: 2}, {c: 3, d: 4}, {}]))
// console.log(jsonToMatrix([{a: {b: 1, c: 2}}, {a: {b: 3, d: 4}}]))
// console.log(jsonToMatrix([[{a: null}], [{b: true}], [{c: 'x'}]]))
// console.log(jsonToMatrix([{}, {}, {}]))

// console.log(jsonToMatrix([[[[1]]], [[2]], [3]]))

console.log(
	findAllKeys({
		friends: [
			{id: 0, name: 'Manuela Hart'},
			{id: 1, name: 'Janice Sykes'},
			{id: 2, name: 'Beasley Bonner'},
		],
		greeting: 'Hello, Roberts West! You have 6 unread messages.',
		favoriteFruit: 'apple',
	}),
)
