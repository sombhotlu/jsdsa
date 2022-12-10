/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
	let start = 0,
		end = x,
		ans = 0

	if (x === 0 || x === 1) return x

	while (start <= end) {
		let mid = Math.floor(start + (end - start) / 2)
		if (mid * mid <= x) {
			ans = mid
			start = mid + 1
		} else {
			end = mid - 1
		}
	}
	return ans
}

console.log(mySqrt(100))
console.log(mySqrt(1000))
console.log(mySqrt(64))
console.log(mySqrt(4))
console.log(mySqrt(8))
console.log(mySqrt(9))
