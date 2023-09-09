/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function (obj) {
	if (typeof obj !== 'object' || obj === null) {
		return Boolean(obj)
	}

	let isObjectArray = Array.isArray(obj)
	let result = isObjectArray ? [] : {}

	if (isObjectArray) {
		for (let value of obj) {
			if (typeof value === 'object') {
				let intermediateVal = compactObject(value)
				console.log(intermediateVal)
				if (Boolean(intermediateVal)) result.push(intermediateVal)
			} else {
				if (Boolean(value)) result.push(value)
			}
		}
		return result
	} else {
		for (let [key, value] of Object.entries(obj)) {
			if (typeof value === 'object') {
				let intermediateVal = compactObject(value)
				if (Boolean(intermediateVal)) {
					result[key] = intermediateVal
				}
			} else {
				if (Boolean(value)) {
					result[key] = value
				}
			}
		}

		return result
	}
}

console.log(compactObject({a: null, b: [false, 1]}))
// console.log(compactObject([null, 0, 5, [0], [false, 16]]))
