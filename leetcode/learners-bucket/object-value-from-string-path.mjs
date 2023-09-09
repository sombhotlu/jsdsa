import assert from 'node:assert'

const get = (obj, stringPath) => {
	if (!stringPath || stringPath.length === 0) {
		return undefined
	}

	const excludeCharacters = ['[', ']', '.']
	const keys = []
	for (let i = 0; i < stringPath.length; i++) {
		if (!excludeCharacters.includes(stringPath[i])) {
			keys.push(stringPath[i])
		}
	}

	let value = keys.reduce((obj, key) => {
		return obj[key]
	}, obj)

	return value
}

const obj = {
	a: {
		b: {
			c: [1, 2, 3],
		},
	},
}

console.log(assert.deepEqual(get(obj, 'a.b.c'), [1, 2, 3]))
console.log(get(obj, 'a.b.c.0'))
console.log(get(obj, 'a.b.c[1]'))
console.log(get(obj, ['a', 'b', 'c', '2']))
console.log(get(obj, 'a.b.c[3]'))
console.log(get(obj, 'a.c'))
