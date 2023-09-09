var jsonStringify = function (object) {
	return convertToStringify(object)
}

const convertToStringify = (object) => {
	if (object === null) {
		return null
	}

	let jsonObject = {}

	for (let [key, value] of Object.entries(object)) {
		if (!key) {
			return jsonObject
		}

		jsonObject[`${key}`] = typeof value === 'object' ? convertToStringify(value) : value
	}

	return jsonObject
}

console.log({y: 1, x: 2})
