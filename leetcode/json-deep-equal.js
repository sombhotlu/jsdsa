/* 
    recursion, because I need to check if things are fine

    if object 
        check if Array
    else do just equality check ====

 */

/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {
	// for numbers, booleans, strings
	if (typeof o1 !== 'object' && typeof o2 !== 'object' && o1 !== o2) {
		return false
	}

	// To check if both are arrays
	if ((!Array.isArray(o1) && Array.isArray(o2)) || (!Array.isArray(o2) && Array.isArray(o1))) {
		return false
	} else if (Array.isArray(o1) && Array.isArray(o2)) return checkArraysEqual(o1, o2)

	// for null or undefined
	if (o1 == o2) return true

	if (o1 === null || (o2 === null && o1 !== o2)) return false

	const keysOfO1 = Object.keys(o1)
	const keysOfO2 = Object.keys(o2)

	if (keysOfO1.length !== keysOfO2.length) return false

	let isEqual = true

	for (let [key, value] of Object.entries(o1)) {
		if (typeof value === 'object') {
			if (Array.isArray(value)) {
				if (Array.isArray(o2[key])) {
					if (!checkArraysEqual(value, o2[key])) return false
				} else {
					return false
				}
			} else if (!areDeeplyEqual(value, o2[key])) {
				return false
			}
		} else if (value !== o2[key]) {
			return false
		}
	}

	return isEqual
}

const checkArraysEqual = (a1, a2) => {
	let isEqual = true

	if (a1.length !== a2.length) return false

	for (const [i, val] of a1.entries()) {
		if (typeof val === 'object') {
			if (!areDeeplyEqual(val, a2[i])) {
				return false
			}
		} else if (val !== a2[i]) return false
	}
	return isEqual
}

// console.log(areDeeplyEqual({x: 1, y: 2}, {x: 1, y: 2}))
// console.log(areDeeplyEqual({0: 1}, [1]))
// console.log(areDeeplyEqual([1], [1]))
// console.log(areDeeplyEqual([1], {0: 1}))
console.log(areDeeplyEqual({x: {x: {x: {x: {x: 1, y: 2}}}}}, {x: {x: {x: {x: {y: 2, x: 1}}}}}))
