// [4, 3, 2, 1, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2]
function candy(ratings: number[]): number {
	let result = 0,
		initialCount = 1,
		countOfCounsecutiveDecreasingNumber = 1,
		i

	if (ratings.length === 1) return 1

	for (i = 1; i < ratings.length; i++) {
		while (ratings[i] < ratings[i - 1]) {
			countOfCounsecutiveDecreasingNumber++
			i++
		}

		if (countOfCounsecutiveDecreasingNumber > 1) {
			result += getSumWithInitialCount(countOfCounsecutiveDecreasingNumber, initialCount)
			if (ratings[i] === ratings[i - 1]) initialCount = 1
			else initialCount = 2
			countOfCounsecutiveDecreasingNumber = 1

			continue
		}

		if (ratings[i] > ratings[i - 1]) {
			result += initialCount
			initialCount += 1
		}

		if (ratings[i] === ratings[i - 1]) {
			result += initialCount
			initialCount = 1
		}
	}

	if (ratings[i - 1] > ratings[i - 2]) {
		result += initialCount
	} else if (ratings[i - 1] === ratings[i - 2]) {
		result += 1
	}

	return result
}

function getSumWithInitialCount(countOfCounsecutiveDecreasingNumber: number, initialCount: number) {
	//  formula Sn = n/2[2a + (n − 1) × d]
	if (countOfCounsecutiveDecreasingNumber < initialCount) {
		let sumOfConsecutive = getSumOfConsecutiveNumbers(countOfCounsecutiveDecreasingNumber - 1)
		return sumOfConsecutive + initialCount
	} else {
		return getSumOfConsecutiveNumbers(countOfCounsecutiveDecreasingNumber)
	}
}

function getSumOfConsecutiveNumbers(n: number) {
	return (n * (n + 1)) / 2
}

console.log(candy([4, 3, 2, 1, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2])) // 47
console.log(candy([1, 2, 2, 1])) // 6
console.log(candy([1, 2, 2])) // 4
console.log(candy([1, 0, 2])) // 5
console.log(candy([1, 3, 2, 2, 1])) // 7
console.log(candy([1, 2, 87, 87, 87, 2, 1])) // 13
console.log(candy([5, 3, 7, 3])) // 6
console.log(candy([1, 2, 3])) // 6
console.log(candy([1, 2, 3, 5, 4, 3, 2, 1, 4, 3, 2, 1, 3, 2, 1, 1, 2, 3, 4])) // 47
