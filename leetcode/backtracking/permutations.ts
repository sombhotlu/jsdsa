function permute(nums: number[]): number[][] {
	let result: number[][] = [],
		totalNumbers = nums.length

	function permuations(takenList: number[], reaminingList: number[]) {
		if (takenList.length === totalNumbers) {
			result.push(takenList)
			return
		}

		for (let num of reaminingList) {
			permuations(
				takenList.concat(num),
				reaminingList.filter((val) => val !== num),
			)
		}
	}

	permuations([], nums)

	return result
}

console.log(permute([1, 2, 3]))
