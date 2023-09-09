var promisePool = async function (functions, n) {
	return new Promise((resolve) => {
		let inProgressCount = 0
		let functionIndex = 0
		function helper() {
			if (functionIndex >= functions.length) {
				if (inProgressCount === 0) resolve()
				return
			}

			while (inProgressCount < n && functionIndex < functions.length) {
				inProgressCount++
				const promise = functions[functionIndex]()
				functionIndex++
				promise.then(() => {
					inProgressCount--
					helper()
				})
			}
		}
		helper()
	})
}

let functions = [
	() => new Promise((res) => setTimeout(res(1), 300)),
	() => new Promise((res) => setTimeout(res(2), 400)),
	() => new Promise((res) => setTimeout(res(3), 200)),
]
;(async () => {
	console.log(functions)
	let result = await promisePool(functions, 2)
	console.log(result)
})()
