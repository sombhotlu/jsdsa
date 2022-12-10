/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	if (n == 0 || n == 1) return 1

	let resultArr = [1, 1]
	findTheCount(resultArr, n)
	return resultArr[n]
}

function findTheCount(resultArr, n) {
	let currentLength = resultArr.length

	if (currentLength > n) return

	resultArr[currentLength] = resultArr[currentLength - 1] + resultArr[currentLength - 2]
	return findTheCount(resultArr, n)
}

console.log(climbStairs(4))
