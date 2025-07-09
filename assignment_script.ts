const MORSE_CODE = {
	'-----': '0',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'.-': 'A',
	'-...': 'B',
	'-.-.': 'C',
	'-..': 'D',
	'.': 'E',
	'..-.': 'F',
	'--.': 'G',
	'....': 'H',
	'..': 'I',
	'.---': 'J',
	'-.-': 'K',
	'.-..': 'L',
	'--': 'M',
	'-.': 'N',
	'---': 'O',
	'.--.': 'P',
	'--.-': 'Q',
	'.-.': 'R',
	'...': 'S',
	'-': 'T',
	'..-': 'U',
	'...-': 'V',
	'.--': 'W',
	'-..-': 'X',
	'-.--': 'Y',
	'--..': 'Z',
	'-.-.--': '!',
	'.-.-.-': '.',
	'--..--': ',',
}

async function getData(url = '', data = {}) {
	const response = await fetch(url, {
		method: 'GET',
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
	})
	return response.json() // parses JSON response into native JavaScript objects
}

let {numParts} = await getData('/assingments')

let result = new Array(numParts + 1).fill('')

function delay(milliSec) {
	return new Promise((resolve) => {
		setTimeout(resolve, milliSec)
	})
}

async function callScript() {
	for (let i = 1; i <= numParts; i++) {
		await delay(2600)
		let {data} = await getData(`/data?part=${i}`)

		let [numStr, charStr] = data.join('').split('➡➡➡')

		let num = MORSE_CODE[numStr.slice(0, 5)]
		if (numStr.length > 5) num += MORSE_CODE[numStr.slice(5)]
		result[Number(num)] = MORSE_CODE[charStr]

		console.log('The num and result is -->', num, MORSE_CODE[charStr])
	}
}

await callScript()

console.log('The result is  --->', result.join(''))

async function postData(url = '', data = {}) {
	const response = await fetch(url, {
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
		body: JSON.stringify(data),
	})

	return response.json()
}

let response = await postData('/answers', {
	chaincode: result.join(''),
})

export {}
