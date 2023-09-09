var checkIfInstanceOf = function (obj, classFunction) {
	if (obj === null || obj === undefined) return false

	if (!isConstructor(classFunction)) return false

	let constructorName = classFunction?.prototype?.constructor?.name.toLowerCase()

	if (constructorName === 'object') return true

	if (obj instanceof classFunction) return true

	if (typeof obj === 'symbol' || constructorName === 'symbol') {
		return typeof obj === constructorName
	}

	let instanceObj = new classFunction(obj)
	if (obj === instanceObj.valueOf()) return true

	return false
}

function isConstructor(obj) {
	return !!obj?.prototype && !!obj?.prototype?.constructor.name
}

console.log(checkIfInstanceOf(new Date(), Date))
console.log(checkIfInstanceOf(5, Number))
console.log(checkIfInstanceOf(Date, Date))
console.log(checkIfInstanceOf(new Date(), Date))
console.log(checkIfInstanceOf(null, null))
console.log(checkIfInstanceOf(null, Symbol))
console.log(checkIfInstanceOf(null, Object))
console.log(checkIfInstanceOf(0, Object))
console.log(checkIfInstanceOf(Symbol(), Error))
console.log(checkIfInstanceOf(Symbol(), Object))
