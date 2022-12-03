/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	let resultSet = []
	generateBalanceString(n, n, '', resultSet)
	return resultSet
}

function generateBalanceString(openParenCount, closedParenCount, currentString, resultSet) {
	if (openParenCount === 0 && closedParenCount === 0) {
		resultSet.push(currentString)
		return
	}

	if (openParenCount) {
		generateBalanceString(openParenCount - 1, closedParenCount, currentString + '(', resultSet)
	}

	if (closedParenCount > openParenCount) {
		generateBalanceString(openParenCount, closedParenCount - 1, currentString + ')', resultSet)
	}

	return
}
