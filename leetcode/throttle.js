var throttle = function (fn, t) {
	let firstTime = false,
		functionCalled = false,
		intervalFn,
		result,
		latestArgs
	return function (...args) {
		if (!firstTime) {
			firstTime = true

			if (!intervalFn) {
				intervalFn = setInterval(() => {
					if (functionCalled) {
						functionCalled = false
						return fn(...latestArgs)
					} else {
						clearInterval(intervalFn)
						intervalFn = undefined
						firstTime = false
					}
				}, t)
			}
			return fn(...args)
		} else {
			functionCalled = true
			latestArgs = [...args]
		}
	}
}

let throttledFn = throttle(() => console.log('Heyy'), 2000)

console.log(throttledFn())
